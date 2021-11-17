import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductionPageRoutingModule } from './add-production-routing.module';

import { AddProductionPage } from './add-production.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductionPageRoutingModule
  ],
  declarations: [AddProductionPage]
})
export class AddProductionPageModule {}
