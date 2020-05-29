import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageMeassurePointsPageRoutingModule } from './manage-meassure-points-routing.module';

import { ManageMeassurePointsPage } from './manage-meassure-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageMeassurePointsPageRoutingModule
  ],
  declarations: [ManageMeassurePointsPage]
})
export class ManageMeassurePointsPageModule {}
