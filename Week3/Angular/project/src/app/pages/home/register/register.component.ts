import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagementService } from '@services/management.service';
// import { ManagementService } from 'src/app/shared/services/management.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm!: NgForm;
  userList: User[] = [
    {
      username: 'hungg',
      email: 'hung@gmail.com',
      fullName: 'Duong Tien Hung',
      phoneNumber: 12345789,
    },
  ];

  isEditting: boolean = false;

  constructor(private managementService: ManagementService) {}

  ngOnInit(): void {}

  save(values: User) {
    if (this.isEditting) {
      this.userList = this.userList.map((ele) =>
        ele.username === values.username ? values : ele
      );
    } else {
      this.userList.push(values);
    }
    console.log(this.userList);
    this.registerForm.resetForm();
  }

  handleDelete(username: string) {
    // const index = this.userList.findIndex(
    //   (ele) => ele.username === user.username
    // );
    // this.userList.splice(index, 1);

    // this.userList = this.userList.filter(
    //   (ele) => ele.username !== user.username
    // );

    this.userList = this.managementService.remove(
      this.userList,
      'username',
      username
    );
  }

  handleEdit(user: User) {
    // this.registerForm.setValue(user);
    // this.isEditting = true;
    // this.registerForm.form.markAsPristine();

    this.managementService.edit(this.registerForm, user);
    this.isEditting = true;
  }

  checkIsExisted(user: string) {
    if (this.isEditting) {
      return false;
    }
    return !!this.userList.find((ele) => ele.username === user);
    // if (result) {
    //   return true;
    // }
    // return false;
  }
}

interface User {
  username: string;
  email: string;
  fullName: string;
  phoneNumber: number;
}
