import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TopBarModule } from '../dependency/topbar/top-bar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopBarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
