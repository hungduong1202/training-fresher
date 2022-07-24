import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: any;
  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleRemove() {
    this.remove.emit(this.user);
  }
}
