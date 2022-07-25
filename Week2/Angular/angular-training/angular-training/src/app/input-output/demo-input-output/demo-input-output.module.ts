import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoInputOutputComponent } from './demo-input-output.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoInputOutputComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DemoInputOutputComponent],
})
export class DemoInputOutputModule {}
