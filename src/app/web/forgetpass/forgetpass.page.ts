import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {

  email: string = '';
  isSent: boolean = false;

  constructor(private afAuth: AngularFireAuth) {}

  async resetPassword() {
    try {
      await this.afAuth.sendPasswordResetEmail(this.email);
      this.isSent = true;
      this.simulateLoading()
    } catch (error: any) {
      console.error('Reset password error:', error.message);
      alert('Reset password error');
    }
  }
  showCheckmark: boolean = false;

  // Function to simulate loading and display the checkmark
  simulateLoading() {
    this.showCheckmark = false; // Reset to hide checkmark
    // Simulate loading for 5 seconds
    setTimeout(() => {
      this.showCheckmark = true;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  ngOnInit() {
  }

}
