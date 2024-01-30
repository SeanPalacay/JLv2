import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JlappPageRoutingModule } from './jlapp-routing.module';

import { JlappPage } from './jlapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JlappPageRoutingModule
  ],
  declarations: [JlappPage]
})
export class JlappPageModule {}
