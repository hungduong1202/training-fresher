import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss'],
})
export class OneWayBindingComponent implements OnInit {
  username: string = 'Cybersoft';

  constructor() {}

  ngOnInit(): void {}

  populateUserName(): string {
    return `Hello ${this.username}`;
  }

  onChange(value: string) {
    this.username = value;
  }
}
