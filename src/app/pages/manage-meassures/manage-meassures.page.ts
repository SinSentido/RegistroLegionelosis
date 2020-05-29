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
import { Meassure } from '../../dto/Meassure';

@Component({
  selector: 'app-manage-meassures',
  templateUrl: './manage-meassures.page.html',
  styleUrls: ['./manage-meassures.page.scss'],
})
export class ManageMeassuresPage implements OnInit {

  companie: Companie = new Companie();
  meassurePoints: MeassurePoint[] = [];
  meassures: Meassure[] = [];

  meassurePointSelected: string = "all";

  loadingData: boolean = true;

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadData();
  }

  private loadData(){
    this.meassurePoints = [];
    //get companie
    this.companie = this.dataService.getCompanie();

    //get meassure points and meassures of the companie
    this.databaseService.getCompanieMeassurePoints(this.companie.companieId).valueChanges().subscribe(values => {
      values.forEach(value => {
        this.meassurePoints.push(value);
        this.databaseService.getMeassuresOfMeassurePoint(value.meassurePointId).valueChanges().subscribe(meassures => {
          meassures.forEach(meassure => {
            this.meassures.push(meassure);
          });
        });
      });
    });

    setTimeout(() => {
      this.loadingData = false;
    }, 500);
  }

}
