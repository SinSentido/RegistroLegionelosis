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
  },
  {
    path: 'create-meassure-point',
    loadChildren: () => import('./pages/create-meassure-point/create-meassure-point.module').then( m => m.CreateMeassurePointPageModule)
  },
  {
    path: 'manage-companies',
    loadChildren: () => import('./pages/manage-companies/manage-companies.module').then( m => m.ManageCompaniesPageModule)
  },
  {
    path: 'companie-info',
    loadChildren: () => import('./pages/companie-info/companie-info.module').then( m => m.CompanieInfoPageModule)
  },
  {
    path: 'manage-meassure-points',
    loadChildren: () => import('./pages/manage-meassure-points/manage-meassure-points.module').then( m => m.ManageMeassurePointsPageModule)
  },
  {
    path: 'manage-meassures',
    loadChildren: () => import('./pages/manage-meassures/manage-meassures.module').then( m => m.ManageMeassuresPageModule)
  },
  {
    path: 'edit-companie',
    loadChildren: () => import('./pages/edit-companie/edit-companie.module').then( m => m.EditCompaniePageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'edit-meassure-point',
    loadChildren: () => import('./pages/edit-meassure-point/edit-meassure-point.module').then( m => m.EditMeassurePointPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./pages/user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./pages/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'construction',
    loadChildren: () => import('./pages/construction/construction.module').then( m => m.ConstructionPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'about-legionella',
    loadChildren: () => import('./pages/help-pages/about-legionella/about-legionella.module').then( m => m.AboutLegionellaPageModule)
  },
  {
    path: 'regulation',
    loadChildren: () => import('./pages/help-pages/regulation/regulation.module').then( m => m.RegulationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
