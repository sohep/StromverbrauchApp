import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddStatusPageRoutingModule } from './add-status-routing.module';

import { AddStatusPage } from './add-status.page';
import { SharedModule } from '../../../modules/SharedModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStatusPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddStatusPage]
})
export class AddStatusPageModule {}
