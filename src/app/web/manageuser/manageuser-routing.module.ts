import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageuserPage } from './manageuser.page';

const routes: Routes = [
  {
    path: '',
    component: ManageuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageuserPageRoutingModule {}
