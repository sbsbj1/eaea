import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailConductorPageRoutingModule } from './detail-conductor-routing.module';

import { DetailConductorPage } from './detail-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailConductorPageRoutingModule
  ],
  declarations: [DetailConductorPage]
})
export class DetailConductorPageModule {}
