import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service.service';
import { UserCreateDto } from 'src/shared/common/interfaces';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  user: UserCreateDto = {
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: 'GP01',
    hoTen: '',
  };

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe({
      next: (result) => {
        console.log(result);
        alert('Create user successfully');
        this.route.navigate(['user']);
      },
    });
  }
}
