import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './input-output.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [InputOutputComponent, CardComponent],
  imports: [CommonModule],
  exports: [InputOutputComponent],
})
export class InputOutputModule {}
