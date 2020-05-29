import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanieInfoPageRoutingModule } from './companie-info-routing.module';

import { CompanieInfoPage } from './companie-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanieInfoPageRoutingModule
  ],
  declarations: [CompanieInfoPage]
})
export class CompanieInfoPageModule {}
