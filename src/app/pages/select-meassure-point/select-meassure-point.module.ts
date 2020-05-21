import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMeassurePointPageRoutingModule } from './select-meassure-point-routing.module';

import { SelectMeassurePointPage } from './select-meassure-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMeassurePointPageRoutingModule
  ],
  declarations: [SelectMeassurePointPage]
})
export class SelectMeassurePointPageModule {}
