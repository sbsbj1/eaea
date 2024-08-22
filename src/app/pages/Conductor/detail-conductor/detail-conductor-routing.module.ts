import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailConductorPage } from './detail-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: DetailConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailConductorPageRoutingModule {}
