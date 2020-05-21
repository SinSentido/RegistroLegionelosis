import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'select-companie',
    loadChildren: () => import('./pages/select-companie/select-companie.module').then( m => m.SelectCompaniePageModule)
  },
  {
    path: 'create-companie',
    loadChildren: () => import('./pages/create-companie/create-companie.module').then( m => m.CreateCompaniePageModule)
  },
  {
    path: 'create-meassure',
    loadChildren: () => import('./pages/create-meassure/create-meassure.module').then( m => m.CreateMeassurePageModule)
  },
  {
    path: 'select-meassure-point',
    loadChildren: () => import('./pages/select-meassure-point/select-meassure-point.module').then( m => m.SelectMeassurePointPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
