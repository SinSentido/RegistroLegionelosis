import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

import { Companie } from './../../dto/Companie';
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

  createMeassure(companieId: string, meassure: Meassure){
    this.fireDatabase.list("companies/" + companieId +"/meassures").push(meassure).key;
  }

  //get all the companies of a user specified by param
  getUserCompanies(userId: string): AngularFireList<Companie>{
    return this.fireDatabase.list("companies", 
      ref => ref.orderByChild('userId').equalTo(userId));
  }

  updateCompanie(companieId: string, companie: Companie){
    this.fireDatabase.database.ref('companies/' + companieId).set(companie).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  deleteCompanie(companieId: string){
    
  }
}
