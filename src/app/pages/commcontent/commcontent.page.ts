// commcontent.page.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commcontent',
  templateUrl: './commcontent.page.html',
  styleUrls: ['./commcontent.page.scss'],
})
export class CommcontentPage implements OnInit {
  messageToSend: string = '';
  messages: string[] = [];
  isMessageVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  openSettings() {
    console.log('Clicked');
  }

  sendMessageKo() {
    if (this.messageToSend.trim() !== '') {
      this.messages.push(this.messageToSend);
      this.messageToSend = ''; 
    }
  }

  showMyMessage() {
    this.isMessageVisible = !this.isMessageVisible;
  }
}
