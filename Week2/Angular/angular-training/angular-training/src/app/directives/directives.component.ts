import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  status: UserStatus;
}

interface Chair {
  name: string;
  status: ChairStatus;
}

enum ChairStatus {
  Booked = 'Booked',
  Avaiable = 'Avaiable',
  Booking = 'Booking',
}

//Dạng liệt kê
enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  users: User[] = [
    { name: 'Hung', email: 'hung@gmail.com', status: UserStatus.Active },
    { name: 'Ha', email: 'ha@gmail.com', status: UserStatus.Inactive },
    { name: 'Hieu', email: 'hieu@gmail.com', status: UserStatus.Pending },
  ];

  isLogin: boolean = false;

  chairs: Chair[] = [
    {
      name: '001',
      status: ChairStatus.Avaiable,
    },
    {
      name: '002',
      status: ChairStatus.Booked,
    },
    {
      name: '003',
      status: ChairStatus.Avaiable,
    },
    {
      name: '004',
      status: ChairStatus.Avaiable,
    },
  ];

  chairStatus = ChairStatus;

  constructor() {}

  ngOnInit(): void {}

  currentStyle = {
    background: 'red',
    color: 'white',
  };

  changeChairStatus(chair: Chair) {
    // if (chair.status === this.chairStatus.Avaiable) {
    //   chair.status = this.chairStatus.Booking;
    // } else if (chair.status === this.chairStatus.Booking) {
    //   chair.status = this.chairStatus.Avaiable;
    // }

    const index = this.chairs.findIndex((item) => {
      return item.name === chair.name;
    });

    console.log(this.chairs[index]);

    if (index !== -1) {
      if (this.chairs[index].status === this.chairStatus.Avaiable) {
        this.chairs[index].status = this.chairStatus.Booking;
      } else {
        this.chairs[index].status = this.chairStatus.Avaiable;
      }
    }
  }
}
