import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCompaniePage } from './edit-companie.page';

const routes: Routes = [
  {
    path: '',
    component: EditCompaniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCompaniePageRoutingModule {}
