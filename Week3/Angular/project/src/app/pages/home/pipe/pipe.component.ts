import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  product: Product = {
    name: 'Iphone 13',
    description: 'My Phone',
    price: 50,
    percent: 0.051234,
    startDate: new Date(),
    category: {
      name: 'SmartPhone',
      description: 'My SmartPhone',
    },
    lines: [1, 2, 3],
  };

  username: string = 'Hung';
  constructor() {}

  ngOnInit(): void {}
}

interface Category {
  name: string;
  description: string;
}

interface Product {
  name: string;
  description: string;
  price: number;
  percent: number;
  startDate: Date;
  category: Category;
  lines: any;
}
