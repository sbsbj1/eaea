import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListConductorPage } from './list-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ListConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListConductorPageRoutingModule {}
