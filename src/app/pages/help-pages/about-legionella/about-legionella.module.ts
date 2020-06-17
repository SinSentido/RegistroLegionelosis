import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutLegionellaPageRoutingModule } from './about-legionella-routing.module';

import { AboutLegionellaPage } from './about-legionella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutLegionellaPageRoutingModule
  ],
  declarations: [AboutLegionellaPage]
})
export class AboutLegionellaPageModule {}
