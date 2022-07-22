import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    FormComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DataBindingComponent],
})
export class DataBindingModule {}
