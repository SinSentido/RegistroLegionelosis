import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCompaniePageRoutingModule } from './create-companie-routing.module';

import { CreateCompaniePage } from './create-companie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCompaniePageRoutingModule
  ],
  declarations: [CreateCompaniePage]
})
export class CreateCompaniePageModule {}
