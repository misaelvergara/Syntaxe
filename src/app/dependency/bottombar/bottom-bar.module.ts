import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './bottom-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    BottomBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BottomBarComponent
  ]
})
export class BottomBarModule { }
