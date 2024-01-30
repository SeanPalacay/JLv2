import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPagePageRoutingModule } from './upload-page-routing.module';

import { UploadPagePage } from './upload-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPagePageRoutingModule,
  ],
  declarations: [UploadPagePage],
})
export class UploadPagePageModule {}
