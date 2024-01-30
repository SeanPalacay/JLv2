import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {  SidebarComponent  } from 'src/app/components/sidebar/sidebar.component';
import { DhomePageRoutingModule } from './dhome-routing.module';

import { DhomePage } from './dhome.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhomePageRoutingModule
  ],
  declarations: [DhomePage,SidebarComponent]
})
export class DhomePageModule {}
