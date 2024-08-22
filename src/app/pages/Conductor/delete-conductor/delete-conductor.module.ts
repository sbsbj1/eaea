import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteConductorPageRoutingModule } from './delete-conductor-routing.module';

import { DeleteConductorPage } from './delete-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteConductorPageRoutingModule
  ],
  declarations: [DeleteConductorPage]
})
export class DeleteConductorPageModule {}
