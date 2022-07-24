import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  // user: User = {
  //   name: 'Hung',
  //   age: 0,
  // };

  users: User[] = [
    { name: 'Hung', age: 22 },
    { name: 'Hai', age: 21 },
    { name: 'Ha', age: 20 },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleRemove(user: User) {
    const index = this.users.findIndex(
      (currentUser) => user.name === currentUser.name
    );
    this.users.splice(index, 1);
  }
}
