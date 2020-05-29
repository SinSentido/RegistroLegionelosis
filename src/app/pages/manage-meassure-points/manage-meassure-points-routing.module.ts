import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageMeassurePointsPage } from './manage-meassure-points.page';

const routes: Routes = [
  {
    path: '',
    component: ManageMeassurePointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageMeassurePointsPageRoutingModule {}
