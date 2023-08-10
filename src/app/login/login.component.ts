import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'user';
  password = '';
  errorMessage = 'Invalid Credentials!';
  invalidLogin = false;

  constructor(private router: Router) {}

  handleLogin() {
    console.log(this.username);

    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
