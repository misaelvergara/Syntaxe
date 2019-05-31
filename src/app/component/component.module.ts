import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentPage } from './component.page';
import { TopBarModule } from '../dependency/top-bar/top-bar.module';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentPage
  },
  {
    path: ':array',
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
  declarations: [ComponentPage, TreeComponent],
  entryComponents: [TreeComponent]
})
export class ComponentPageModule {}
