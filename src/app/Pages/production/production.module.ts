import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionPageRoutingModule } from './production-routing.module';

import { ProductionPage } from './production.page';
import { ProductionItemModule } from 'src/app/Components/production-item/production-item.module';
import { ProductionItemComponent } from 'src/app/Components/production-item/production-item.component';
import { NotifModule } from 'src/app/Components/notif/notif.module';
import { NotifComponent } from 'src/app/Components/notif/notif.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionPageRoutingModule,
    ProductionItemModule,
    NotifModule,
  ],
  declarations: [ProductionPage, ProductionItemComponent, NotifComponent],
})
export class ProductionPageModule {}
