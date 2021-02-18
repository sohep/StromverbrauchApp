import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-counter',
    loadChildren: () => import('./settings/counter/create-counter/create-counter.module').then( m => m.CreateCounterPageModule)
  },
  {
    path: 'add-status/:counterNumber',
    loadChildren: () => import('./settings/counter/add-status/add-status.module').then( m => m.AddStatusPageModule)
  },
  {
    path: 'chart/:counterNumber',
    loadChildren: () => import('./settings/counter/chart/chart.module').then( m => m.ChartPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
