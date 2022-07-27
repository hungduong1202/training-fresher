import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent implements OnInit {
  username: string = 'Hung';
  isDestroy: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
