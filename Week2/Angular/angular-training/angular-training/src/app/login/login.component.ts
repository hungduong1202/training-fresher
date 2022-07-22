import { Component, OnInit } from '@angular/core';

interface UserLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = {
    username: '',
    password: '',
  };

  isLogin: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userLogin);
    if (
      this.userLogin.username === 'hung' &&
      this.userLogin.password === 'hung'
    ) {
      this.isLogin = true;
      localStorage.setItem('userLogin', JSON.stringify(this.userLogin));
    }
  }
}
