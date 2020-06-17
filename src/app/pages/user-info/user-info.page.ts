import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';


//classes
import { User } from '../../dto/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  user: User = new User();

  loadingData: boolean = true;

  constructor(private router: Router,
    private databaseService: DatabaseService,
    private localStorage: LocalStorageService,
) { }

  ngOnInit() {
    this.loadData();
  }

  closeSession(){
    this.localStorage.removeUserId();
    this.router.navigate(['/login']);
  }

  navigateToEditUser(){
    this.router.navigate(['/edit-user']);
  }

  private loadData(){
    this.localStorage.getUserId().then(id => {
      this.databaseService.getUserById(id).valueChanges().subscribe(users => {
        this.user = users[0];
        this.loadingData = false;
      });
    });
  }

}
