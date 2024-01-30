import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadPagePage } from './upload-page.page';

const routes: Routes = [
  {
    path: '',
    component: UploadPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadPagePageRoutingModule {}
