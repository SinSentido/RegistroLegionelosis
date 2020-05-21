import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';

import { Companie } from './../../dto/Companie';

//services
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-create-companie',
  templateUrl: './create-companie.page.html',
  styleUrls: ['./create-companie.page.scss'],
})
export class CreateCompaniePage implements OnInit {

  companie: Companie = new Companie();
  name: string = "";
  owner: string = "";
  representant: string = "";
  phone: string = "";
  fax: string = "";
  email: string = "";
  regNumber: string = "";
  nif: string = "";

  creationError: boolean = false;
  nameErrorMessage: string = "";
  ownerErrorMessage: string = "";
  phoneErrorMessage: string = "";
  emailErrorMessage: string = "";
  nifErrorMessage: string = "";

  loading: boolean = false;

  constructor(
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private localStorage: LocalStorageService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  createCompanie(){
    if(this.validateForm()){
      this.localStorage.getUserId().then(userId => {
        this.companie.userId = userId;
        this.companie.name = this.name;
        this.companie.owner = this.owner;
        this.companie.representant = this.representant;
        this.companie.phone = this.phone;
        this.companie.fax = this.fax;
        this.companie.email = this.email;
        this.companie.regNumber = this.regNumber;
        this.companie.nif = this.nif;

        this.databaseService.createCompanie(this.companie);
        this.loading = false;

        this.alertCreateMeassurePoint();
      });

    }
    else{
      this.loading = false;
      this.creationError = true;
    }
  }

  validateForm(): boolean{
    this.loading = true;
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
    if(!this.email.match(new RegExp("[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+")) && this.email != ""){
      this.emailErrorMessage = "*El email introducido no tiene un formato válido."
      isValid = false;
    }
    if(!this.nif.match(new RegExp("[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]"))){
      this.nifErrorMessage = "*El NIF o NIE introducido no tiene un formato válido";
      isValid = false
    }

    return isValid;
  }

  navigateToSelectCompanies(){
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/select-companie']);
  }

  private resetErrorMessages(){
    this.creationError = false;
    this.nameErrorMessage = "";
    this.ownerErrorMessage = "";
    this.phoneErrorMessage = "";
    this.emailErrorMessage = "";
    this.nifErrorMessage = "";
  }

    //alert
    async alertCreateMeassurePoint() {
      const alert = await this.alertController.create({
        header: 'Empresa creada!',
        message: 'La empresa se ha creado correctamente pero no tiene ningún punto de medida.\n¿Quieres crear un punto de medida ahora?',
        buttons: [
          {
            text: 'Crear ahora',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Crear luego',
            handler: () => {
              this.navigateToSelectCompanies();
            }
          }
        ]
      });
  
      await alert.present();
    }

}
