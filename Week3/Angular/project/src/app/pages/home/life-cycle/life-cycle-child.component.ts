import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  template: `<div class="bg-light py-5 mt-2 text-center">
    {{ username }}
    <p #pTemplate>Hello</p>
  </div>`,
})
export class LifeCycleChildComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() username: string = '';
  @ViewChild('pTemplate') pTemplate!: ElementRef<HTMLParamElement>;

  timeout: any;

  //hàm khởi tạo khi component chạy
  constructor() {
    console.log('contructor called');
  }

  //chạy khi giá trị input thay đổi
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  // component did mount (reactjs): chạy lần đầu tiên
  ngOnInit() {
    console.log('ngOnInit called');
    console.log(this.pTemplate);
    this.timeout = setInterval(() => {
      console.log('setInterval is running');
    }, 1000);
  }

  // chạy khi khởi tạo xong html
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(this.pTemplate.nativeElement.innerHTML);
  }

  // chạy khi component bị huỷ đi
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    clearInterval(this.timeout);
  }
}
