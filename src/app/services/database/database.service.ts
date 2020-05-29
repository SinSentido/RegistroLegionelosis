import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

//classes
import { Companie } from './../../dto/Companie';
import { MeassurePoint } from '../../dto/MeassurePoint';
import { Meassure } from './../../dto/Meassure';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fireDatabase: AngularFireDatabase) { }

  //adds a new companie to the database
  createCompanie(companie: Companie){
    let key = this.fireDatabase.list("companies").push(companie).key;
    companie.companieId = key;
    this.updateCompanie(companie.companieId, companie);
  }

  //adds a new meassurePoint to the database
  createMeassurePoint(meassurePoint: MeassurePoint){
    let key = this.fireDatabase.list("meassurePoints").push(meassurePoint).key;
    meassurePoint.meassurePointId = key;
    this.updateMeassurePoint(meassurePoint.meassurePointId, meassurePoint);
  }

  createMeassure(meassure: Meassure){
    let key = this.fireDatabase.list("meassures").push(meassure).key;
    meassure.meassureId = key;
    this.updateMeassure(meassure.meassureId, meassure);
  }

  //get all the companies of a user specified by param
  getUserCompanies(userId: string): AngularFireList<Companie>{
    return this.fireDatabase.list("companies", 
      ref => ref.orderByChild('userId').equalTo(userId));
  }

  getCompanieMeassurePoints(companieId: string): AngularFireList<MeassurePoint>{
    return this.fireDatabase.list("meassurePoints",
      ref => ref.orderByChild("companieId").equalTo(companieId));
  }

  getMeassuresOfMeassurePoint(meassurePointId: string): AngularFireList<Meassure>{
    return this.fireDatabase.list("meassures",
      ref => ref.orderByChild("meassurePointId").equalTo(meassurePointId));
  }

  getMeassuresOfMeassurePointByDate(meassurePointId: string, date: string): AngularFireList<Meassure>{
    return this.fireDatabase.list("meassures",
      ref => ref.orderByChild("meassurePointId").equalTo(meassurePointId));
  }

  //updates
  updateCompanie(companieId: string, companie: Companie){
    this.fireDatabase.database.ref('companies/' + companieId).set(companie).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  updateMeassurePoint(meassurePointId: string, meassurePoint: MeassurePoint){
    this.fireDatabase.database.ref('meassurePoints/' + meassurePointId).set(meassurePoint).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

  updateMeassure(meassureId: string, meassure: Meassure){
    this.fireDatabase.database.ref('meassures/' + meassureId).set(meassure).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

  //deletes
  deleteCompanie(companieId: string){
    this.fireDatabase.database.ref('companies/' + companieId).remove().then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  deleteMeassurePoint(meassurePointId: string): Promise<any>{
    return this.fireDatabase.database.ref('meassurePoints/' + meassurePointId).remove()
  }

  deleteMeassure(meassureId: string){
    this.fireDatabase.database.ref('meassures/' + meassureId).set('').then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }
}
