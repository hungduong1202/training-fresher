import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../product-list/product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productItem!: IProduct;
  @Output() remove = new EventEmitter<IProduct>();

  handleRemove() {
    // console.log(product);
    this.remove.emit(this.productItem);
  }

  constructor() {}

  ngOnInit(): void {}
}
