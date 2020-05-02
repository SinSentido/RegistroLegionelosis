import { Injectable } from '@angular/core';

import { Companie } from '../../dto/Companie';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data: Companie;

  constructor() { }

  setData(companie: Companie){
    this.data = companie;
  }

  getData(): Companie{
    return this.data;
  }
}
