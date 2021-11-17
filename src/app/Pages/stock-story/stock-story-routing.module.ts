import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockStoryPage } from './stock-story.page';

const routes: Routes = [
  {
    path: '',
    component: StockStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockStoryPageRoutingModule {}
