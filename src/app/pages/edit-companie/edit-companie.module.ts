import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCompaniePageRoutingModule } from './edit-companie-routing.module';

import { EditCompaniePage } from './edit-companie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCompaniePageRoutingModule
  ],
  declarations: [EditCompaniePage]
})
export class EditCompaniePageModule {}
