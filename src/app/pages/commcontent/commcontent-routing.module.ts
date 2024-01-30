import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommcontentPage } from './commcontent.page';

const routes: Routes = [
  {
    path: '',
    component: CommcontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommcontentPageRoutingModule {}
