import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { BarModule } from '../dependency/bar/bar.module';
import { TellBarService } from '../dependency/tell-bar.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
  ],
  providers: [
    TellBarService
  ]
})
export class HomePageModule {}
