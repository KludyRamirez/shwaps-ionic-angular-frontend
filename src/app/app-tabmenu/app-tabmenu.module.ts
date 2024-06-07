import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppTabmenuPageRoutingModule } from './app-tabmenu-routing.module';

import { AppTabmenuPage } from './app-tabmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppTabmenuPageRoutingModule
  ],
  declarations: [AppTabmenuPage]
})
export class AppTabmenuPageModule {}
