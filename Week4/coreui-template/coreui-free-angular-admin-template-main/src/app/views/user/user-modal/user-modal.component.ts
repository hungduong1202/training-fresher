import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  @Input() modalVisible: any;
  @Output() changeEvent = new EventEmitter();
  @Output() submitEdit = new EventEmitter();
  @Input() user!: User;
  @Output() toggleModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleToggleModal() {
    this.toggleModal.emit();
  }

  handleChange(event: any) {
    this.changeEvent.emit(event);
  }

  handleSubmit() {
    this.submitEdit.emit();
    this.toggleModal;
  }
}

interface User {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  matKhau: string;
  maLoaiNguoiDung: string;
}
