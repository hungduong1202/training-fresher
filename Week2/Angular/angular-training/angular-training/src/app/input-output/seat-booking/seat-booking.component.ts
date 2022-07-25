import {
  Component,
  ComponentRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SeatComponent } from './seat/seat.component';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss'],
})
export class SeatBookingComponent implements OnInit {
  seatList: Seat[] = [
    { id: 1, seatName: 'Số 1', price: 100, status: true },
    { id: 2, seatName: 'Số 2', price: 100, status: false },
    { id: 3, seatName: 'Số 3', price: 100, status: false },
    { id: 4, seatName: 'Số 4', price: 100, status: false },
    { id: 5, seatName: 'Số 5', price: 100, status: false },
    { id: 6, seatName: 'Số 6', price: 100, status: false },
    { id: 7, seatName: 'Số 7', price: 100, status: false },
    { id: 8, seatName: 'Số 8', price: 100, status: false },
    { id: 9, seatName: 'Số 9', price: 100, status: false },
    { id: 10, seatName: 'Số 10', price: 100, status: false },
    { id: 11, seatName: 'Số 11', price: 100, status: false },
    { id: 12, seatName: 'Số 12', price: 100, status: false },
    { id: 13, seatName: 'Số 13', price: 100, status: false },
    { id: 14, seatName: 'Số 14', price: 100, status: false },
    { id: 15, seatName: 'Số 15', price: 100, status: false },
    { id: 16, seatName: 'Số 16', price: 100, status: false },
    { id: 17, seatName: 'Số 17', price: 100, status: false },
    { id: 18, seatName: 'Số 18', price: 100, status: false },
    { id: 19, seatName: 'Số 19', price: 100, status: false },
    { id: 20, seatName: 'Số 20', price: 100, status: false },
    { id: 21, seatName: 'Số 21', price: 100, status: false },
    { id: 22, seatName: 'Số 22', price: 100, status: false },
    { id: 23, seatName: 'Số 23', price: 100, status: false },
    { id: 24, seatName: 'Số 24', price: 100, status: false },
    { id: 25, seatName: 'Số 25', price: 100, status: false },
    { id: 26, seatName: 'Số 26', price: 100, status: false },
    { id: 27, seatName: 'Số 27', price: 100, status: false },
    { id: 28, seatName: 'Số 28', price: 100, status: false },
    { id: 29, seatName: 'Số 29', price: 100, status: false },
    { id: 30, seatName: 'Số 30', price: 100, status: false },
    { id: 31, seatName: 'Số 31', price: 100, status: false },
    { id: 32, seatName: 'Số 32', price: 100, status: false },
    { id: 33, seatName: 'Số 33', price: 100, status: false },
    { id: 34, seatName: 'Số 34', price: 100, status: false },
    { id: 35, seatName: 'Số 35', price: 100, status: false },
  ];

  constructor() {}
  ngOnInit(): void {}

  @ViewChildren(SeatComponent) seatComponents!: QueryList<SeatComponent>;

  handleClick(seat: Seat) {
    const index = this.selectedSeat.findIndex((ele) => ele.id === seat.id);
    if (index != -1) {
      this.selectedSeat.splice(index, 1);
    } else {
      this.selectedSeat.push(seat);
    }
  }

  unselectSeat(seat: Seat) {
    const index = this.selectedSeat.findIndex((ele) => ele.id === seat.id);
    this.selectedSeat.splice(index, 1);
    this.seatComponents.forEach((seatComponent: SeatComponent) => {
      if (seatComponent.seat.id === seat.id) {
        seatComponent.isSelectedSeat = false;
      }
    });
  }

  sum() {
    let total: number = 0;
    this.selectedSeat.forEach((ele) => {
      total += ele.price;
    });
    return total;
  }

  selectedSeat: Seat[] = [];
}

export interface Seat {
  id: number;
  seatName: string;
  price: number;
  status: boolean;
}
