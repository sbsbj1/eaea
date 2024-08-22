import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListConductorPageRoutingModule } from './list-conductor-routing.module';

import { ListConductorPage } from './list-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListConductorPageRoutingModule
  ],
  declarations: [ListConductorPage]
})
export class ListConductorPageModule {}
