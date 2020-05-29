import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMeassurePointPage } from './create-meassure-point.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMeassurePointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMeassurePointPageRoutingModule {}
