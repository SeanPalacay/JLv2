import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
        data: { title: 'Home' }
        
      },
      {
        path: '',
        redirectTo: 'Dashboard',
        pathMatch: 'full'
      },
      {
        path: 'communication',
        loadChildren: () => import('../communication/communication.module').then( m => m.CommunicationPageModule),
        data: { title: 'Communication' }
      },
      {
        path: 'upload-page',
        loadChildren: () => import('../upload-page/upload-page.module').then(m => m.UploadPagePageModule),
        data: { title: 'Upload-Page' }
      },
      {
        path: 'accomplishedform',
        loadChildren: () => import('../accomplishedform/accomplishedform.module').then( m => m.AccomplishedformPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },

    ]
  },
  {
    path: '',
    redirectTo: 'tabs/Home',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
