import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftPagePage } from './draft-page.page';

const routes: Routes = [
  {
    path: '',
    component: DraftPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftPagePageRoutingModule {}
