import { Component, OnInit } from '@angular/core';

//services
import { DatabaseService } from '../../services/database/database.service';
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

  constructor(private databaseService: DatabaseService,
    private dataService: DataServiceService,) { }

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
      this.meassures = this.meassures.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        if(dateA > dateB){
          return -1;
        }
        else{
          return 1
        }
      });

      this.loadingData = false;
    }, 1500);
  }
}
