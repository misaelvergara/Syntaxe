import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
