import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCompaniePage } from './select-companie.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCompaniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCompaniePageRoutingModule {}
