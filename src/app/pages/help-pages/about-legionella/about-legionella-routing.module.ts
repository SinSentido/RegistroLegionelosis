import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutLegionellaPage } from './about-legionella.page';

const routes: Routes = [
  {
    path: '',
    component: AboutLegionellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutLegionellaPageRoutingModule {}
