import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user-service.service';
import {
  Item,
  ResponseBodyDto,
  UserDto,
  UserListDto,
} from 'src/shared/common/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: Item[] = [];

  visible: boolean = false;

  page: number = 1;

  userDetail: Item = {
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDt: '',
    matKhau: '',
    maLoaiNguoiDung: '',
  };

  fakeArray?: any;

  totalPage?: Number;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  getUserList(page: number) {
    this.page = page;
    this.userService.getUserList(page).subscribe({
      next: (result: ResponseBodyDto<UserListDto>) => {
        console.log(result);
        this.userList = result.content.items;
        this.totalPage = result.content.totalPages;
        this.fakeArray = new Array(this.totalPage);
      },
    });
  }

  ngOnInit(): void {
    this.getUserList(this.page);
  }

  prePage() {
    this.getUserList(this.page > 1 ? this.page - 1 : 1);
  }

  nextPage() {
    this.getUserList(this.page === this.totalPage ? this.page : this.page + 1);
  }

  handleEdit(user: Item) {
    this.toggleModal();
    this.userDetail = { ...user };
  }

  toggleModal() {
    this.visible = !this.visible;
  }

  handleChange(event: any) {
    this.visible = event;
  }

  editSubmit() {
    const index = this.userList.findIndex(
      (ele) => ele.taiKhoan === this.userDetail.taiKhoan
    );

    this.userList[index] = this.userDetail;
    this.toggleModal();
  }
}
