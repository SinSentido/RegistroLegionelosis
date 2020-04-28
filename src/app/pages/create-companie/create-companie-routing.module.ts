import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompaniePage } from './create-companie.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCompaniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCompaniePageRoutingModule {}
