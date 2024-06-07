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
    path: 'app-tabmenu',
    loadChildren: () => import('./app-tabmenu/app-tabmenu.module').then( m => m.AppTabmenuPageModule)
  },
  {
    path: '',
    redirectTo: 'app-tabmenu',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },
  {
    path: 'receipt',
    loadChildren: () => import('./receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  {
    path: '',
    redirectTo: 'receipt',
    pathMatch: 'full'
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then( m => m.SellerPageModule)
  },
  {
    path: '',
    redirectTo: 'seller',
    pathMatch: 'full'
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then( m => m.BuyerPageModule)
  },
  {
    path: '',
    redirectTo: 'buyer',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
