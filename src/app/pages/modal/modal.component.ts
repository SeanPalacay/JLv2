import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  forms: string[] = ['Form 1', 'Form 2', 'Form 3'];
  selectedForm: string | undefined;

  selectFormClicked(formName: string | undefined) {
    if (formName !== undefined) {
      // Do something with the clicked form item (e.g., store the selected form)
      this.selectedForm = formName;
    }
  }

  exitModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {}
}
