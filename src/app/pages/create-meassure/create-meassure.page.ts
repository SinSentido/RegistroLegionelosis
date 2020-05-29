import { MeassurePoint } from './../../dto/MeassurePoint';
import { Meassure } from './../../dto/Meassure';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';

import { Companie } from '../../dto/Companie';

//services
import { DatabaseService } from './../../services/database/database.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

@Component({
  selector: 'app-create-meassure',
  templateUrl: './create-meassure.page.html',
  styleUrls: ['./create-meassure.page.scss'],
})
export class CreateMeassurePage implements OnInit {

  companie: Companie = new Companie();
  meassurePoint: MeassurePoint = new MeassurePoint();
  meassure: Meassure = new Meassure();
  loadingData: boolean = true;

  creationError: boolean = false;
  dateErrorMessage: string = "";
  temperatureErrorMessage: string = "";
  chlorineErrorMessage: string = "";

  date: string = new Date().toISOString();
  temperature: string = "";
  chlorine: string = "";
  description: string = "";

  constructor(
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private dataService: DataServiceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter(){
   
  }

  createMeassure(){
    if(this.validateForm()){
      this.meassure.meassurePointId = this.meassurePoint.meassurePointId;
      this.meassure.date = this.date.substring(0, 10);
      this.meassure.temperature = this.temperature;
      this.meassure.chlorine = this.chlorine;
      this.meassure.comment = this.description;
      this.meassurePoint.lastMeassure = this.date.substring(0, 10);
      this.databaseService.createMeassure(this.meassure);
      this.databaseService.updateMeassurePoint(this.meassurePoint.meassurePointId, this.meassurePoint);

      this.navigateToSelectCompanies();
    }
    else{
      this.creationError = true;
    }
  }

  navigateToSelectCompanies(){
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/select-companie']);
  }

  private validateForm(): boolean{
    let isValid = true;
    this.creationError = false;

    if(this.date == ""){
      this.dateErrorMessage = "*La fecha es obligatoria";
      isValid = false;
    }
    if(this.temperature == ""){
      this.temperatureErrorMessage = "*La temperatura es obligatoria";
      isValid = false;
    }
    else if(!this.temperature.match(new RegExp("[0-9]*"))){
      this.temperatureErrorMessage = "*La temperatura no tiene un formato válido";
      isValid = false;
    }
    else if(!this.chlorine.match(new RegExp("[0-9]*"))){
      this.chlorineErrorMessage = "*El nivel de cloro no tiene un formato válido";
      isValid = false;
    }
    return isValid;
  }

  private loadData(){
    this.companie = this.dataService.getCompanie();
    this.meassurePoint = this.dataService.getMeassurePoint();
    this.loadingData = false;
  }



}
