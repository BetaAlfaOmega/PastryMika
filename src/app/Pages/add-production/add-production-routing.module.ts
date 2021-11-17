import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductionPage } from './add-production.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductionPageRoutingModule {}
