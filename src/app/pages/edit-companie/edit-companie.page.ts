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

@Component({
  selector: 'app-edit-companie',
  templateUrl: './edit-companie.page.html',
  styleUrls: ['./edit-companie.page.scss'],
})
export class EditCompaniePage implements OnInit {

  companie: Companie = new Companie();
  loadingData: boolean = true;

  //formulary
  editError: boolean = false;
  
  name: string = "";
  owner: string = "";
  representant: string = "";
  phone: string = "";
  fax: string = "";
  email: string = "";
  regNumber: string = "";
  nif: string = "";

  nameErrorMessage: string = "";
  ownerErrorMessage: string = "";
  phoneErrorMessage: string = "";
  emailErrorMessage: string = "";


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

  //alert
  async alertConfirmRestoreData() {
    const alert = await this.alertController.create({
    header: 'Descartar cambios',
    message: '¿Está seguro de que quiere restablecer los datos por defecto? Perderá todos los datos que no haya guardado.',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Restablecer',
        handler: () => {
          this.restoreData();
        }
      }
    ]
  });
  await alert.present();
  }

  async alertConfirmEditCompanie() {
    const alert = await this.alertController.create({
      header: 'Guardar cambios',
      message: '¿Quiere guardar los datos cambiados?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Guardar',
          handler: () => {
            this.editCompanie();
          }
        }
      ]
    });
    await alert.present();
  }

  private editCompanie(){
    if(this.validateForm()){
      this.companie.name = this.name;
      this.companie.owner = this.owner;
      this.companie.representant = this.representant;
      this.companie.phone = this.phone;
      this.companie.fax = this.fax;
      this.companie.email = this.email;
      this.companie.regNumber = this.regNumber;
      this.companie.nif = this.nif;
  
      this.databaseService.updateCompanie(this.companie.companieId, this.companie);
      this.navCtrl.back();
    }
    else{
      this.editError = true;
    }

  }

  navigateToManageMeassurePoints(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.dataService.setCompanie(this.companie)
    this.router.navigate(['/manage-meassure-points']);
  }

  navigateToManageMeassures(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.dataService.setCompanie(this.companie)
    this.router.navigate(['/manage-meassures']);
  }

  private loadData(){
    this.companie = this.dataService.getCompanie();
    this.restoreData();
    this.loadingData = false;
  }

  private validateForm(): boolean{
    this.resetErrorMessages();
    let isValid = true;

    if(this.name == ""){
      this.nameErrorMessage = "*El nombre es obligatorio."
      isValid = false;
    }
    if(this.owner == ""){
      this.ownerErrorMessage = "*El titular es obligatorio."
      isValid = false;
    }
    if(!this.phone.match(new RegExp("[0-9]{9}")) && this.phone != ""){
      this.phoneErrorMessage = "*El teléfono no tiene un formato válido."
      isValid = false;
    }
    if(!this.email.match(new RegExp("[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+")) && this.email == ""){
      this.emailErrorMessage = "*El email introducido no tiene un formato válido."
      isValid = false;
    }

    return isValid;
  }

  private resetErrorMessages(){
    this.editError = false;
    this.nameErrorMessage = "";
    this.ownerErrorMessage = "";
    this.phoneErrorMessage = "";
    this.emailErrorMessage = "";
  }

  private restoreData(){
    this.name = this.companie.name;
    this.owner = this.companie.owner;
    this.representant = this.companie.representant;
    this.phone = this.companie.phone;
    this.fax = this.companie.fax;
    this.email = this.companie.email;
    this.regNumber = this.companie.regNumber;
    this.nif = this.companie.nif;
  }
}
