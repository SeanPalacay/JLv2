import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.page.html',
  styleUrls: ['./upload-page.page.scss'],
})
export class UploadPagePage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalController: ModalController
  ) {}

  uploadFormClicked() {
    console.log('Upload Form button clicked');
  }

  editFormClicked() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  goToDraftPage() {
    this.router.navigate(['/draft-page']);
  }

  ngOnInit() {}
}
