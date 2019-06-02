import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './bottom-bar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BottomBarComponent
  ],
  imports: [
    CommonModule,
	RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BottomBarComponent
  ]
})
export class BottomBarModule { }
