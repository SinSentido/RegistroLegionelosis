import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

//services
import { DatabaseService } from '../../services/database/database.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

//classes
import { Companie } from '../../dto/Companie';

@Component({
  selector: 'app-companie-info',
  templateUrl: './companie-info.page.html',
  styleUrls: ['./companie-info.page.scss'],
})
export class CompanieInfoPage implements OnInit {

  companie: Companie = new Companie();

  loadingData: boolean = true;

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private alertController: AlertController,
    private dataService: DataServiceService,
    private navCtrl: NavController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.loadData();
  }

    //alert
  async alertConfirmDelete() {
    const alert = await this.alertController.create({
    header: 'Borrar empresa',
    message: '¿Está seguro de que quiere borrar ' + this.companie.name + '? Perderá toda la información relacionada con la empresa.',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Borrar',
        handler: () => {
          this.deleteCompanie();
        }
      }
   ]
  });
  
  await alert.present();
  }

  private deleteCompanie(){
    this.databaseService.deleteCompanie(this.companie.companieId);
    this.navCtrl.back();
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

  navigateToEditCompanie(){
    this.dataService.setCompanie(this.companie)
    this.router.navigate(['/edit-companie']);
  }

  private loadData(){
    this.companie = this.dataService.getCompanie();
    this.loadingData = false;
  }
}
