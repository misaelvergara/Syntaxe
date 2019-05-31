import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';
import { TopBarModule } from '../dependency/top-bar/top-bar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenerateListModule } from '../dependency/list-generator/list-generator.module';

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
    GenerateListModule,
    IonicModule,
    RouterModule.forChild(routes),
    TopBarModule,
    ReactiveFormsModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
