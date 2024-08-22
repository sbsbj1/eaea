import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteConductorPage } from './delete-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteConductorPageRoutingModule {}
