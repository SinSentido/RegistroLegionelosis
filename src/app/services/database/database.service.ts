import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

import { Companie } from './../../dto/Companie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fireDatabase: AngularFireDatabase) { }

  //adds a new companie to the database
  createCompanie(companie: Companie){
    this.fireDatabase.list("companies").push({
      userId: companie.userId,
      owner: companie.owner,
      representant: companie.representant,
      phone: companie.phone,
      fax: companie.fax,
      email: companie.email,
      regNumber: companie.regNumber,
      nif: companie.nif,
      meassures: companie.meassures
    });
  }

  //get all the companies of a user specified by param
  getUserCompanies(userId: string){
    var companies: AngularFireList<Companie>;

    companies = this.fireDatabase.list("companies", 
      ref => ref.orderByChild('userId').equalTo(userId));

    return companies;
  }

  updateCompanie(companieId: string){

  }

  deleteCompanie(companieId: string){
    
  }
}
