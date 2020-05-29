import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageMeassuresPageRoutingModule } from './manage-meassures-routing.module';

import { ManageMeassuresPage } from './manage-meassures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageMeassuresPageRoutingModule
  ],
  declarations: [ManageMeassuresPage]
})
export class ManageMeassuresPageModule {}
