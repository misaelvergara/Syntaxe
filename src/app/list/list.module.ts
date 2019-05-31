import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TopBarModule } from '../dependency/top-bar/top-bar.module';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { GenerateListModule } from '../dependency/list-generator/list-generator.module';

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
    TopBarModule,
    GenerateListModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
