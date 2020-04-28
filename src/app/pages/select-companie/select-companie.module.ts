import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCompaniePageRoutingModule } from './select-companie-routing.module';

import { SelectCompaniePage } from './select-companie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCompaniePageRoutingModule
  ],
  declarations: [SelectCompaniePage]
})
export class SelectCompaniePageModule {}
