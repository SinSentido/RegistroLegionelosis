import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMeassurePointPage } from './edit-meassure-point.page';

const routes: Routes = [
  {
    path: '',
    component: EditMeassurePointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMeassurePointPageRoutingModule {}
