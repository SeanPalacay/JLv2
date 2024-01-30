import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  constructor() { }

  activeTabTitle: string = '';

  updateActiveTab(event: any) {
    const selectedTab = event.tab;
    this.activeTabTitle = this.getTabTitle(selectedTab);
  }

  getTabTitle(tab: string): string {
    const tabTitleMap: { [key: string]: string } = {
      Home: 'Home',
      communication: 'Communication',
    };

    return tabTitleMap[tab] || '';
  }
}
