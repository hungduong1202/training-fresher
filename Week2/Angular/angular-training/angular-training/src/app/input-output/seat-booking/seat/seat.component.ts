import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seat } from '../seat-booking.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seat!: Seat;
  @Output() selectSeat = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.isSelectedSeat = !this.isSelectedSeat;
    this.selectSeat.emit(this.seat);
  }

  isSelectedSeat: boolean = false;
}
