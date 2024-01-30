import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocatePage } from './geolocate.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocatePageRoutingModule {}
