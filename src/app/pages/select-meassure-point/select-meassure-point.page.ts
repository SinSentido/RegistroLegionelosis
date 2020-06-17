import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//services
import { DatabaseService } from '../../services/database/database.service';
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

  today: string = new Date().toISOString().substring(0,10);
  loadingData: boolean = true;
  meassurePoints: MeassurePoint[] = [];

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private dataService: DataServiceService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadData();
  }

  navigateToCreateMeassurePoint(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/create-meassure-point']);
  }

  navigateToCreateMeassure(meassurePoint: MeassurePoint){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }

    this.dataService.setMeassurePoint(meassurePoint);
    this.nativePageTransitions.slide(options);
    //this.dataServcie.setData(companie)
    this.router.navigate(['/create-meassure']);
  }

  private loadData(){
    this.meassurePoints = [];
    this.companie = this.dataService.getCompanie();

    this.databaseService.getCompanieMeassurePoints(this.companie.companieId).valueChanges().subscribe(values => {
      values.forEach(value => {
        this.meassurePoints.push(value);
      })
    })
    this.loadingData = false;
  }

}
