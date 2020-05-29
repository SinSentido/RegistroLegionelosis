import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageCompaniesPageRoutingModule } from './manage-companies-routing.module';

import { ManageCompaniesPage } from './manage-companies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCompaniesPageRoutingModule
  ],
  declarations: [ManageCompaniesPage]
})
export class ManageCompaniesPageModule {}
