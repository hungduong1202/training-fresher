import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatBookingComponent } from './seat-booking.component';
import { SeatComponent } from './seat/seat.component';

@NgModule({
  declarations: [SeatBookingComponent, SeatComponent],
  imports: [CommonModule],
  exports: [SeatBookingComponent],
})
export class SeatBookingModule {}
