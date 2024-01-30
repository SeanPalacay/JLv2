import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent{
  accountPages = [
    {
      title: 'Dashboard',
      url: '/web/dhome',
      ionicIcon: 'speedometer-outline'
    },
    {
      title: 'Manage Form',
      url: '/web/formbuilder',
      ionicIcon: 'document-text-outline'
    },
    {
      title: 'Manage Users',
      url: '/web/manageuser',
      ionicIcon: 'people-outline'
    },
    {
      title: 'Manage Task',
      url: '/auth/login',
      ionicIcon: 'clipboard-outline'
    },
  ]
  
  constructor() { }

}
