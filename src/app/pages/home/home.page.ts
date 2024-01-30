import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import Swiper from 'swiper';
import { ModalController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  Agent: any = "AGENT 0745";
  cards = Array(5).fill({});
  private swiper!: Swiper;

  ngOnInit() {
    this.initSwiper();
  }

  ngAfterViewInit() {

  }

  private initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: this.calculateSpaceBetween()
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.swiper.params.spaceBetween = this.calculateSpaceBetween();
    this.swiper.update();
  }

  private calculateSpaceBetween(): number {

    return window.innerWidth > 400 ? -50 : -120;
  }



  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

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
}
