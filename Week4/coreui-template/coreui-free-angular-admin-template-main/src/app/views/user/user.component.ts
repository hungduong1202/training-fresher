import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[] = [
    {
      taiKhoan: 'abc123',
      hoTen: 'Hoang Minh',
      email: 'khongco@gmail.com',
      soDT: '0909090909',
      matKhau: '123456321',
      maLoaiNguoiDung: 'QuanTri',
    },
    {
      taiKhoan: 'checkadd12',
      hoTen: 'Yến Ngân',
      email: 'yen12@gmail.com',
      soDT: '25255',
      matKhau: '123456',
      maLoaiNguoiDung: 'QuanTri',
    },
    {
      taiKhoan: 'duc3636',
      hoTen: 'Duc Coder',
      email: 'duc321@gmail.com',
      soDT: '0123456789',
      matKhau: '123456',
      maLoaiNguoiDung: 'QuanTri',
    },
    {
      taiKhoan: 'haiHai',
      hoTen: 'hai12',
      email: 'haitt1997121211e2@gmail.com',
      soDT: '03555',
      matKhau: '123e123',
      maLoaiNguoiDung: 'KhachHang',
    },
    {
      taiKhoan: 'haoadmin',
      hoTen: 'Hào Nguyễn',
      email: 'babyloveyou@gmail.com',
      soDT: '0987654321',
      matKhau: '123456789',
      maLoaiNguoiDung: 'KhachHang',
    },
    {
      taiKhoan: 'hghgh123123',
      hoTen: 'Hoàng Hữu Nhanh',
      email: 'hoanghuunhanh.rain@gmail.com',
      soDT: '0326559894',
      matKhau: '123123123',
      maLoaiNguoiDung: 'KhachHang',
    },
    {
      taiKhoan: 'hoangntu56@gmail.com',
      hoTen: 'testEdited',
      email: 'testEdited1@gmail.com',
      soDT: '0909090909',
      matKhau: '1234567',
      maLoaiNguoiDung: 'QuanTri',
    },
  ];

  visible: boolean = false;

  userDetail: User = {
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDT: '',
    matKhau: '',
    maLoaiNguoiDung: '',
  };

  constructor() {}

  ngOnInit(): void {}

  handleEdit(user: User) {
    this.toggleModal();
    this.userDetail = { ...user };
  }

  toggleModal() {
    this.visible = !this.visible;
  }

  handleChange(event: any) {
    this.visible = event;
  }

  createUser() {}

  editSubmit() {
    const index = this.userList.findIndex(
      (ele) => ele.taiKhoan === this.userDetail.taiKhoan
    );

    this.userList[index] = this.userDetail;
    this.toggleModal();
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
