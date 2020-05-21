import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

//classes
import { MeassurePoint } from './../../dto/MeassurePoint';
import { Companie } from '../../dto/Companie';

@Component({
  selector: 'app-select-meassure-point',
  templateUrl: './select-meassure-point.page.html',
  styleUrls: ['./select-meassure-point.page.scss'],
})
export class SelectMeassurePointPage implements OnInit {

  companie: Companie = new Companie();

  loadingData: boolean = true;
  meassurePoints: MeassurePoint[] = [];

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService) { }

  ngOnInit() {
    this.loadData();
  }

  navigateToCreateMeassure(meassurePoint: MeassurePoint){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    //this.dataServcie.setData(companie)
    this.router.navigate(['/create-meassure']);
  }

  private loadData(){
    this.companie = this.dataService.getCompanie();
    this.loadingData = false;
  }

}
