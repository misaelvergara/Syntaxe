import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'component', loadChildren: './component/component.module#ComponentPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: '**', loadChildren: './log/log.module#LogPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
