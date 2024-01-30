import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocatePageRoutingModule } from './geolocate-routing.module';

import { GeolocatePage } from './geolocate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocatePageRoutingModule
  ],
  declarations: [GeolocatePage]
})
export class GeolocatePageModule {}
