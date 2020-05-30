import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { DataServiceService } from '../../services/data-service/data-service.service';

//classes
import { Companie } from '../../dto/Companie';
import { MeassurePoint } from '../../dto/MeassurePoint';
import { Meassure } from '../../dto/Meassure';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  companies: Companie[] = [];
  meassurePoints: MeassurePoint[] = [];
  meassures: Meassure[] = [];

  companie: Companie = null;
  meassurePoint: MeassurePoint = null;

  selectCompanie: string = "";
  selectMeassurePoint: string = "";

  report = null;

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private databaseService: DatabaseService,
    private accountService: AccountService,
    private localStorage: LocalStorageService,
    private dataService: DataServiceService,
    private platform: Platform,
    private file: File,
    private fileOpener: FileOpener) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.loadData();
  }

  createReport(){
    this.getSelectedData();

    var docDefinition = {
      content: [
        {text: 'REGISTRE DE MEDIDAS PARA LA PREVENCIÓN Y CONTROL DE LA LEGIONELOSIS', style: 'header'},
        {text: this.companie.name, style: 'companieName'},
        {text: 'Titular de la empresa: ' + this.companie.owner, style: 'companieData'}
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        companieName: {
          fontSize: 14,
          bold: true,
        },
        companieData: {
          fontSize: 12,
        }
      }
    }

    this.report = pdfMake.createPdf(docDefinition);
    this.downloadReport();
  }

  private getSelectedData(){
    this.companies.forEach(companie => {
      if(this.selectCompanie == companie.companieId){
        this.companie = companie;
      }
    });

    if(this.selectMeassurePoint != "all"){
      this.meassurePoints.forEach(mp => {
        if(this.selectMeassurePoint == mp.meassurePointId){
          this.meassurePoint = mp;
        }
      });
    }
  }

  private downloadReport(){
    if(this.platform.is('cordova')){
      this.report.getBuffer((buffer) => {
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], {type: 'application/pdf'});

        this.file.writeFile(this.file.dataDirectory, 'registro.pdf', blob).then(fileEntry => {
          this.fileOpener.open(this.file.dataDirectory + 'registro.pdf', 'application/pdf');
        });
      });
    }
    else{
      this.report.download();
    }
  }



  loadMeassurePoints(){
    this.meassurePoints = [];

    if(this.selectCompanie != ""){
      this.databaseService.getCompanieMeassurePoints(this.selectCompanie).valueChanges().subscribe(companies => {
        companies.forEach(companie => {
          this.meassurePoints.push(companie);
        });
      });
    }
  }

  private loadData(){
    this.companies = [];
    
    this.localStorage.getUserId().then(userId => {
      this.databaseService.getUserCompanies(userId).valueChanges().subscribe(values => {
        values.forEach(value => {
          this.companies.push(value);
        });
      });
    });
  }
}
