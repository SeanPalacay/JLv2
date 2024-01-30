import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetpassPage } from './forgetpass.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetpassPageRoutingModule {}
