import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {

  constructor(private router: Router) {}

  // Method to navigate to the 'commcontent' route
  navigateToCommContent() {
    this.router.navigate(['/commcontent']);
  }

  ngOnInit() {
  }

}
