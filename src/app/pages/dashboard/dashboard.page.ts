import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  Agent: any = "AGENT 0745";
  ngOnInit() {
  }

  ngAfterViewInit() {

  }






  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NotificationsComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      icon: 'text',
      text: 'Title [a-z]',
      data: {
        action: 'AtoZ',
        text: 'Title [a-z]',
        icon: 'text',
      },
    },
    {
      icon: 'text-outline',
      text: 'Title [z-a]',
      data: {
        action: 'ZtoA',
        text: 'Title [z-a]',
        icon: 'text',
      },
    },
    {
      icon: 'calendar-outline',
      text: 'Creation date',
      data: {
        action: 'date',
        text: 'Creation date',
        icon: 'calendar-outline',
      },
    },
    {
      icon: 'create-outline',
      text: 'Last edit',
      data: {
        action: 'lastEdit',
        text: 'Last edit',
        icon: 'create-outline',
      },
    },
    {
      text: 'Submission count',
      icon: 'document-text-outline',
      data: {
        action: 'submitcount',
        text: 'Submission count',
        icon: 'document-text-outline',
        
      },
    },
    {
      text: 'Unread',
      icon: 'mail-unread-outline',
      data: {
        action: 'unred',
        text: 'Unread',
        icon: 'mail-unread-outline',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'arrow-back-outline',
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  optionicon: string = 'text';
  optiontext: string = 'Title [a-z]';
  logResult(ev:any) {
    this.optiontext  = ev.detail.data.text;
    this.optionicon = ev.detail.data.icon;
  }

}

