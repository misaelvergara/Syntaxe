import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentPage } from './component.page';
import { TopBarModule } from '../dependency/topbar/top-bar.module';

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
    TopBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentPage]
})
export class ComponentPageModule {}
