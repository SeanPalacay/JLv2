import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JlappPage } from './jlapp.page';

const routes: Routes = [
  {
    path: '',
    component: JlappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JlappPageRoutingModule {}
