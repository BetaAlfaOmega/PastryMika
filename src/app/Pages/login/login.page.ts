import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public showPassword = false;

  constructor() {}

  ngOnInit() {}

  onSignIn() {
    console.log('onsingin');
  }

  showPasswordFunction() {
    this.showPassword = !this.showPassword;
  }
}
