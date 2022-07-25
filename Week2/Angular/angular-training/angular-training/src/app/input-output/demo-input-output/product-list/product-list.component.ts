import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductComponent } from '../product/product.component';

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductComponent)
  productComponent!: QueryList<ProductComponent>;

  productList: IProduct[] = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleRemove(product: IProduct) {
    const index = this.productList.findIndex(
      (currentProduct) => currentProduct.id === product.id
    );

    this.productList.splice(index, 1);
  }

  handleDiscount() {
    console.log(this.productComponent);
    this.productComponent.forEach(
      (productComponent) => (productComponent.productItem.price -= 10)
    );
  }
}
