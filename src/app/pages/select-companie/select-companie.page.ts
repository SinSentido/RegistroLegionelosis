import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//services
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

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
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService) { }

  ngOnInit() {
 
  }

  ionViewWillEnter(){
    this.loadCompanies();
  }

  private loadCompanies(){
    this.companies = [];
    
    this.localStorage.getUserId().then(userId => {
      this.databaseService.getUserCompanies(userId).valueChanges().subscribe(values => {
        values.forEach(value => {
          this.companies.push(value);
        })
        this.loadingData = false;
      });
    });
  }

  navigateToCreateCompanie(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/create-companie']);
  }

  navigateToSelectMeassurePoint(companie: Companie){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.dataService.setCompanie(companie)
    this.router.navigate(['/select-meassure-point']);
  }
}
