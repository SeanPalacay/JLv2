import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhomePage } from './dhome.page';

const routes: Routes = [
  {
    path: '',
    component: DhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhomePageRoutingModule {}
