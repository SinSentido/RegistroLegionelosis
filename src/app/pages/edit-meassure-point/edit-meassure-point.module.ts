import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMeassurePointPageRoutingModule } from './edit-meassure-point-routing.module';

import { EditMeassurePointPage } from './edit-meassure-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMeassurePointPageRoutingModule
  ],
  declarations: [EditMeassurePointPage]
})
export class EditMeassurePointPageModule {}
