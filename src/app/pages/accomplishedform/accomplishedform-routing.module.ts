import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomplishedformPage } from './accomplishedform.page';

const routes: Routes = [
  {
    path: '',
    component: AccomplishedformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomplishedformPageRoutingModule {}
