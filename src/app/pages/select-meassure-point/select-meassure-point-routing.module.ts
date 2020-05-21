import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMeassurePointPage } from './select-meassure-point.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMeassurePointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMeassurePointPageRoutingModule {}
