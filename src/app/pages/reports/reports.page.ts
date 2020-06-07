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
  loadingReport = false;

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
    this.loadingReport = true;
    this.getSelectedData();

    var docDefinition = {
      content: [
        {text: 'REGISTRO DE MEDIDAS PARA LA PREVENCIÓN Y CONTROL DE LA LEGIONELOSIS', style: 'header'},
        {text: this.companie.name, style: 'companieName'},
        {text: 'Titular de la empresa: ' + this.companie.owner, style: 'companieData'},
        {text: 'Representante: ' + this.companie.representant, style: 'companieData'},
        {text: 'Número de registro: ' + this.companie.regNumber, style: 'companieData'},
        {text: 'NIF: ' + this.companie.nif, style: 'companieNIF'},
        {text: 'Teléfono: ' + this.companie.phone, style: 'companieData'},
        {text: 'Email: ' + this.companie.email, style: 'companieEmail'},

        {canvas: [{ type: 'line', x1: 10, y1: 10, x2: 500, y2: 10, lineWidth: 1 }]}
      ],
      styles: {
        header: {
          fontSize: 18,
          color: '#093652',
          bold: true,
          alignment: 'center',
        },
        companieName: {
          fontSize: 16,
          bold: true,
          color: '#093652',
          marginTop: 50,
          marginBottom: 5,
        },
        companieData: {
          fontSize: 12,
        },
        companieNIF: {
          marginBottom: 10,
        },
        companieEmail: {
          marginBottom: 30,
        },
        meassureName: {
          fontSize: 12,
          marginTop: 20,
          marginBottom: 5,
          bold: true,
        },
        meassureDescription: {
          marginBottom: 5,
        },
        meassureTemperature: {
          marginBottom: 5,
        },
        meassureChlorine: {
          marginBottom: 20,
        }
      }
    }

    setTimeout(() => {
      this.orderMeassures();

      this.meassures.forEach(meassure => {
        this.meassurePoints.forEach(mp => {
          if(mp.meassurePointId == meassure.meassurePointId){
            docDefinition.content.push({text: mp.name + "                                " + meassure.date, style: 'meassureName'});
            docDefinition.content.push({text: "Descripción: " + mp.description, style: 'meassureDescription'});
          }
        });
        docDefinition.content.push({text: "Temperatura: " + meassure.temperature + ' ºC', style: 'meassureTemperature'});
        docDefinition.content.push({text: "Nivel de cloro: " + meassure.chlorine, style: 'meassureChlorine'});
        docDefinition.content.push({ canvas: [{ type: 'line', x1: 10, y1: 10, x2: 500, y2: 10, lineWidth: 1 }]});
      });
      this.report = pdfMake.createPdf(docDefinition);
      this.downloadReport();
    }, 3000);
  }

  private orderMeassures(){
    this.meassures = this.meassures.sort(function (a, b) {
      var dateA = new Date(a.date), dateB = new Date(b.date);
      if(dateA > dateB){
        return -1;
      }
      else{
        return 1
      }
    });
  }

  private getSelectedData(){
    this.meassures = [];

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
      this.databaseService.getMeassuresOfMeassurePoint(this.meassurePoint.meassurePointId).valueChanges().subscribe(meassures => {
        meassures.forEach(meassure => {
          this.meassures.push(meassure);
        });
      });
    }
    else{
      this.meassurePoints.forEach(meassurePoint => {
        this.databaseService.getMeassuresOfMeassurePoint(meassurePoint.meassurePointId).valueChanges().subscribe(meassures => {
          meassures.forEach(meassure => {
            this.meassures.push(meassure);
          })
        });
      });
    }
  }

  private downloadReport(){
    if(this.platform.is('cordova')){
      this.report.getBuffer((buffer) => {
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], {type: 'application/pdf'});

        this.file.writeFile(this.file.dataDirectory, 'registro.pdf', blob, {replace: true}).then(fileEntry => {
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
