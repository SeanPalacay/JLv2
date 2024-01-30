import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'web/landing',
    pathMatch: 'full',
  },
  {
    path: 'web/login',
    loadChildren: () => import('./web/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'web/manageuser',
    loadChildren: () => import('./web/manageuser/manageuser.module').then( m => m.ManageuserPageModule)
  },
  {
    path: 'draft-page',
    loadChildren: () => import('./pages/draft-page/draft-page.module').then( m => m.DraftPagePageModule)
  },
  {
    path: 'web/formbuilder',
    loadChildren: () => import('./pages/formbuilder/formbuilder.module').then( m => m.FormbuilderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'web/dhome',
    loadChildren: () => import('./web/dhome/dhome.module').then( m => m.DhomePageModule)
  },
  {
    path: 'commcontent',
    loadChildren: () => import('./pages/commcontent/commcontent.module').then( m => m.CommcontentPageModule)
  },

  {
    path: 'communication',
    loadChildren: () => import('./pages/communication/communication.module').then( m => m.CommunicationPageModule)
  },
  {
    path: 'web/forgetpass',
    loadChildren: () => import('./web/forgetpass/forgetpass.module').then( m => m.ForgetpassPageModule)
  },
  {
    path: 'web/landing',
    loadChildren: () => import('./web/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'web/jlapp',
    loadChildren: () => import('./web/jlapp/jlapp.module').then( m => m.JlappPageModule)
  },



 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
