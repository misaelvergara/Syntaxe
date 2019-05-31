import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateListComponent } from './list-generator.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GenerateListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [GenerateListComponent]
})
export class GenerateListModule { }
