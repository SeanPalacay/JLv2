import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage  {
  constructor(private router: Router) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
