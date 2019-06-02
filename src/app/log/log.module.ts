import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TopBarModule } from '../dependency/top-bar/top-bar.module';
import { IonicModule } from '@ionic/angular';
import { LogPage } from './log.page';

const routes: Routes = [
  {
    path: '',
    component: LogPage,
	runGuardsAndResolvers: 'always',
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
  declarations: [LogPage]
})
export class LogPageModule {}
