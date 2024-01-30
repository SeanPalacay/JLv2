import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.email,
        this.password
      );
      // Successfully logged in, navigate to home page or any other page
      this.router.navigate(['/web/dhome']);
    } catch (error:any) {
      console.error('Login error:', error.message);
    alert('Login error');
      // Handle login error (display a message or redirect to an error page)
    }
  }
}
