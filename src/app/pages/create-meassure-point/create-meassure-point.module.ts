import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMeassurePointPageRoutingModule } from './create-meassure-point-routing.module';

import { CreateMeassurePointPage } from './create-meassure-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMeassurePointPageRoutingModule
  ],
  declarations: [CreateMeassurePointPage]
})
export class CreateMeassurePointPageModule {}
