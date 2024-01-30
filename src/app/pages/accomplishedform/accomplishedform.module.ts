import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccomplishedformPageRoutingModule } from './accomplishedform-routing.module';

import { AccomplishedformPage } from './accomplishedform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccomplishedformPageRoutingModule
  ],
  declarations: [AccomplishedformPage]
})
export class AccomplishedformPageModule {}
