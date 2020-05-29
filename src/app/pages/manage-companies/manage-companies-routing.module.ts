import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCompaniesPage } from './manage-companies.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCompaniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCompaniesPageRoutingModule {}
