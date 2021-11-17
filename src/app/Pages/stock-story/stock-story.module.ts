import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockStoryPageRoutingModule } from './stock-story-routing.module';

import { StockStoryPage } from './stock-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockStoryPageRoutingModule
  ],
  declarations: [StockStoryPage]
})
export class StockStoryPageModule {}
