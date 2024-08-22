import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPPage } from './list-p.page';

const routes: Routes = [
  {
    path: '',
    component: ListPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPPageRoutingModule {}
