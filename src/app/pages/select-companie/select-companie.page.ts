import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

//classes
import { Companie } from '../../dto/Companie';

@Component({
  selector: 'app-select-companie',
  templateUrl: './select-companie.page.html',
  styleUrls: ['./select-companie.page.scss'],
})
export class SelectCompaniePage implements OnInit {

  loadingData: boolean = true;
  companies: Companie[] = [];

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies(){
    this.localStorage.getUserId().then(userId => {
      this.databaseService.getUserCompanies(userId).valueChanges().subscribe(values => {
        console.log(values);
        values.forEach(value => {
          this.companies.push(value);
        })
        this.loadingData = false;
      });
    });
  }

  navigateToCreateCompanie(){
    this.router.navigate(['/create-companie']);
  }

}
