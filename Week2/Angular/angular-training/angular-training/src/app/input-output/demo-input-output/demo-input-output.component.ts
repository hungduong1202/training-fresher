import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  IProduct,
  ProductListComponent,
} from './product-list/product-list.component';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrls: ['./demo-input-output.component.scss'],
})
export class DemoInputOutputComponent implements OnInit {
  @ViewChild('buttonTmp') buttonTemplate!: ElementRef<HTMLButtonElement>;

  @ViewChild('productListTmp') productListTemplate!: ProductListComponent;

  name: string = '';
  price: number = 0;

  constructor() {}

  ngOnInit(): void {}

  handleSave() {
    console.log(this.buttonTemplate);
    this.buttonTemplate.nativeElement.innerHTML = 'Submit';
    console.log(this.productListTemplate);

    const newProduct: IProduct = {
      id: Date.now(),
      name: this.name,
      price: this.price,
    };

    this.productListTemplate.productList.push(newProduct);
  }
}
