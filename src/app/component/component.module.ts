import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentPage } from './component.page';
import { TellBarService } from '../dependency/tell-bar.service';

const routes: Routes = [
  {
    path: '',
    component: ComponentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentPage],
  providers: [TellBarService]
})
export class ComponentPageModule {}
