import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppTabmenuPage } from './app-tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: AppTabmenuPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'seller',
        loadChildren: () => import('../seller/seller.module').then( m => m.SellerPageModule)
      },
      {
        path: '',
        redirectTo: 'seller',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppTabmenuPageRoutingModule {}
