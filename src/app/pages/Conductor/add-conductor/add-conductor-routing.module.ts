import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddConductorPage } from './add-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: AddConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddConductorPageRoutingModule {}
