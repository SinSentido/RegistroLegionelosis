import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageMeassuresPage } from './manage-meassures.page';

const routes: Routes = [
  {
    path: '',
    component: ManageMeassuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageMeassuresPageRoutingModule {}
