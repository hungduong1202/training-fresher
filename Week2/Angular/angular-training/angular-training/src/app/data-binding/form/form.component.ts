import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  email: string = '';
  fullName: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.email || !this.fullName) {
      alert('Pls fill the form');
      return;
    }
    alert('Email: ' + this.email + '\nFullname: ' + this.fullName);
    this.email = '';
    this.fullName = '';
  }
}
