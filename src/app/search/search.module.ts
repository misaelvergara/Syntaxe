import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';
import { TopBarModule } from '../dependency/topbar/top-bar.module';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TopBarModule,
    ReactiveFormsModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
