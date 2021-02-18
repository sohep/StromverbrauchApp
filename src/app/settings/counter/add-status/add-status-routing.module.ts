import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStatusPage } from './add-status.page';

const routes: Routes = [
  {
    path: '',
    component: AddStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStatusPageRoutingModule {}
