import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCounterPage } from './create-counter.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCounterPageRoutingModule {}
