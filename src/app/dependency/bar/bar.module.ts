/*
  @module: depends on (2) components
    BottombarComponent
    TopbarComponent
  @exportable: true
    : this module exports its declared components
  @target: app.component [@/: root/app.module]
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { BottombarComponent } from '../bottombar/bottombar.component';
import { IonicModule } from '@ionic/angular';
import { TellBarService } from '../tell-bar.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    BottombarComponent,
    TopbarComponent
  ],
  exports: [
    BottombarComponent,
    TopbarComponent
  ],
  providers: [
    TellBarService
  ]
})
export class BarModule { }
