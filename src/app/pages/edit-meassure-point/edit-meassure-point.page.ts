import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

//services
import { DatabaseService } from '../../services/database/database.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

//classes
import { MeassurePoint } from './../../dto/MeassurePoint';
import { Companie } from '../../dto/Companie';

@Component({
  selector: 'app-edit-meassure-point',
  templateUrl: './edit-meassure-point.page.html',
  styleUrls: ['./edit-meassure-point.page.scss'],
})
export class EditMeassurePointPage implements OnInit {

  companie: Companie = new Companie();
  meassurePoint: MeassurePoint = new MeassurePoint();
  loadingData: boolean = true;

  //formulary
  editError: boolean = false;

  name: string = "";
  description: string = "";
  nameErrorMessage: string = "";
  descriptionErrorMessage: string = "";

  constructor(private databaseService: DatabaseService,
    private alertController: AlertController,
    private dataService: DataServiceService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(){
    this.meassurePoint = this.dataService.getMeassurePoint();
    this.companie = this.dataService.getCompanie();
    this.restoreData();
    this.loadingData = false;
  }

  private resetErrorMessages(){
    this.editError = false;
    this.nameErrorMessage = "";
    this.descriptionErrorMessage = "";
  }

  private restoreData(){
    this.name = this.meassurePoint.name;
    this.description = this.meassurePoint.description;
  }

    //alert
    async alertConfirmRestoreData() {
      const alert = await this.alertController.create({
      header: 'Borrar empresa',
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
  
    async alertConfirmEditMeassurePoint() {
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
              this.editMeassurePoint();
            }
          }
        ]
      });
      await alert.present();
    }
  
    private editMeassurePoint(){
      if(this.validateForm()){
        this.meassurePoint.name = this.name;
        this.meassurePoint.description = this.description;
    
        this.databaseService.updateMeassurePoint(this.meassurePoint.meassurePointId, this.meassurePoint);
        this.navCtrl.back();
      }
      else{
        this.editError = true;
      }
    }

    private validateForm(): boolean{
      this.resetErrorMessages();
      let isValid = true;
  
      if(this.name == ""){
        this.nameErrorMessage = "*El nombre es obligatorio."
        isValid = false;
      }
      if(this.description == ""){
        this.descriptionErrorMessage = "*La descripción es obligatoria."
        isValid = false;
      }
  
      return isValid;
    }

}
