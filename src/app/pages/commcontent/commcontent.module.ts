import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommcontentPageRoutingModule } from './commcontent-routing.module';

import { CommcontentPage } from './commcontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommcontentPageRoutingModule
  ],
  declarations: [CommcontentPage]
})
export class CommcontentPageModule {}
