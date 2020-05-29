import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { DataServiceService } from '../../services/data-service/data-service.service';
import { NavController } from '@ionic/angular';

//classes
import { MeassurePoint } from './../../dto/MeassurePoint';
import { Companie } from '../../dto/Companie';

@Component({
  selector: 'app-create-meassure-point',
  templateUrl: './create-meassure-point.page.html',
  styleUrls: ['./create-meassure-point.page.scss'],
})
export class CreateMeassurePointPage implements OnInit {

  companie: Companie = new Companie();
  meassurePoint: MeassurePoint = new MeassurePoint();

  name: string = "";
  description: string = "";

  creationError: boolean = false;
  nameErrorMessage: string = "";
  descriptionErrorMessage: string = "";

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.loadData();
  }

  createMeassurePoint(){
    this.creationError = false;
    if(this.validateForm()){
      this.meassurePoint.name = this.name;
      this.meassurePoint.description = this.description;
      this.meassurePoint.companieId = this.companie.companieId;

      this.databaseService.createMeassurePoint(this.meassurePoint);
      this.navigateToSelectMeassurePoint();
    }
    else{
      this.creationError = true;
    }
  }

  private validateForm(): boolean{
    if(this.name == ""){
      this.nameErrorMessage = "*El nombre es obligatorio.";
      return false;
    }
    else if(this.description == ""){
      this.descriptionErrorMessage = "*La descripción es obligatoria.";
      return false;
    }
    else{
      return true;
    }
  }

  private navigateToSelectMeassurePoint(){
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.navCtrl.back();
  }

  private loadData(){
    this.companie = this.dataService.getCompanie();
  }

}
