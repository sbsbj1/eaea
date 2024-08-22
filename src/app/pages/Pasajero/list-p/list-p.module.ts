import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPPageRoutingModule } from './list-p-routing.module';

import { ListPPage } from './list-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPPageRoutingModule
  ],
  declarations: [ListPPage]
})
export class ListPPageModule {}
