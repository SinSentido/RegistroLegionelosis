import { Injectable } from '@angular/core';

import { Companie } from '../../dto/Companie';
import { MeassurePoint } from '../../dto/MeassurePoint';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  companie: Companie;
  meassurePoint: MeassurePoint;

  constructor() { }

  setCompanie(companie: Companie){
    this.companie = companie;
  }

  setMeassurePoint(meassurePoint: MeassurePoint){
    this.meassurePoint = meassurePoint;
  }

  getCompanie(): Companie{
    return this.companie;
  }

  getMeassurePoint(){
    return this.meassurePoint;
  }
}
