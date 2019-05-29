import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TopBarModule } from '../dependency/topbar/top-bar.module';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TopBarModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
