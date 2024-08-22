import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddConductorPageRoutingModule } from './add-conductor-routing.module';

import { AddConductorPage } from './add-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddConductorPageRoutingModule
  ],
  declarations: [AddConductorPage]
})
export class AddConductorPageModule {}
