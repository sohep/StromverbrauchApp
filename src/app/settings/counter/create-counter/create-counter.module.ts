import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CreateCounterPageRoutingModule } from './create-counter-routing.module';

import { CreateCounterPage } from './create-counter.page';
import { SharedModule } from '../../../modules/SharedModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCounterPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [CreateCounterPage]
})
export class CreateCounterPageModule {}
