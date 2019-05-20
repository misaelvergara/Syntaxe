import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentPage } from './component.page';
import { BottombarComponent } from '../dependency/bottombar/bottombar.component';
import { TopbarComponent } from '../dependency/topbar/topbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComponentPage
      }
    ])
  ],
  declarations: [
    ComponentPage,
    BottombarComponent,
    TopbarComponent
  ]
})
export class ComponentPageModule {}
