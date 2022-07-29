import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/common/constants';
import {
  ResponseBodyDto,
  UserCreateDto,
  UserDto,
  UserListDto,
} from 'src/shared/common/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserList(page: any): Observable<ResponseBodyDto<UserListDto>> {
    return this.httpClient.get<ResponseBodyDto<UserListDto>>(
      `${API_URL}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP00&soTrang=${page}&soPhanTuTrenTrang=100`
    );
  }

  createUser(user: UserCreateDto) {
    return this.httpClient.post<ResponseBodyDto<UserCreateDto>>(
      `${API_URL}/QuanLyNguoiDung/DangKy`,
      user
    );
  }

  editUser() {}
}
