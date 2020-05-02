import { Meassure } from './../../dto/Meassure';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  meassure: Meassure = new Meassure();
  loadingData: boolean = true;

  creationError: boolean = false;
  dateErrorMessage: string = "";
  temperatureErrorMessage: string = "";

  date: string = new Date().toISOString();
  temperature: string = "";
  description: string = "";

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private dataService: DataServiceService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  createMeassure(){
    if(this.validateForm()){
      this.meassure.date = this.date;
      this.meassure.temperature = this.temperature;
      this.meassure.description = this.description;
      this.databaseService.createMeassure(this.companie.companieId, this.meassure);
    }
    else{
      this.creationError = true;
    }
  }

  navigateToSelectCompanie(){
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
    if(this.description == ""){
      
    }
    return isValid;
  }

  private loadData(){
    this.companie = this.dataService.getData();
    this.loadingData = false;
  }

}
