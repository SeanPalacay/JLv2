import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftPagePageRoutingModule } from './draft-page-routing.module';

import { DraftPagePage } from './draft-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftPagePageRoutingModule
  ],
  declarations: [DraftPagePage]
})
export class DraftPagePageModule {}
