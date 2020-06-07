import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AlertController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

//classes
import { MeassurePoint } from './../../dto/MeassurePoint';
import { Companie } from '../../dto/Companie';
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
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private alertController: AlertController,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService,
    private navCtrl: NavController) { }

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
