import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMeassurePage } from './create-meassure.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMeassurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMeassurePageRoutingModule {}
