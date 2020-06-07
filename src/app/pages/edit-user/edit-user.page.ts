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
import { User } from '../../dto/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  user: User = new User();
  loadingData: boolean = false;

  name: string = "";
  surname: string = "";
  email: string = "";
  phone: string = "";
  nif: string = "";

  editError: boolean = false;
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
            this.editUser();
          }
        }
      ]
    });
    await alert.present();
  }

  private editUser(){
    this.user.name = this.name;
    this.user.surname = this.surname;
    this.user.phone = this.phone;
    this.user.nif = this.nif;

    this.localStorage.getUserId().then(id => {
      this.databaseService.updateUser(id, this.user);
      this.navCtrl.back();
    })
  }

  private restoreData(){
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.email = this.user.email;
    this.phone = this.user.phone;
    this.nif = this.user.nif;
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
