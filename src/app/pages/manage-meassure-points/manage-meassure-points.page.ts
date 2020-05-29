import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

//classes
import { MeassurePoint } from './../../dto/MeassurePoint';
import { Companie } from '../../dto/Companie';

@Component({
  selector: 'app-manage-meassure-points',
  templateUrl: './manage-meassure-points.page.html',
  styleUrls: ['./manage-meassure-points.page.scss'],
})
export class ManageMeassurePointsPage implements OnInit {

  companie: Companie = new Companie();

  loadingData: boolean = true;
  meassurePoints: MeassurePoint[] = [];

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService,
    private alertController: AlertController) { }

  ngOnInit() {}

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

  async alertConfirmDelete(meassurePoint: MeassurePoint) {
    const alert = await this.alertController.create({
    header: 'Borrar empresa',
    message: '¿Está seguro de que quiere borrar ' + meassurePoint.name + '? Perderá toda la información relacionada con el punto de medida.',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Borrar',
        handler: () => {
          this.deleteMeassurePoint(meassurePoint.meassurePointId);
        }
      }
   ]
  });
  
  await alert.present();
  }

  private deleteMeassurePoint(meassurePointId: string){
    this.databaseService.deleteMeassurePoint(meassurePointId).then(res => {
      console.log(res);
      this.loadData();
    }).catch(error => {
      console.log(error);
    })
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
