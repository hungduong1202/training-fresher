import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  LoginDto,
  ResponseBodyDto,
  SubmitLoginDto,
} from '../common/interfaces';
import { API_URL, TOKEN_CYBERSOFT } from '../common/constants';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(submitDto: SubmitLoginDto): Observable<ResponseBodyDto<LoginDto>> {
    return this.httpClient.post<ResponseBodyDto<LoginDto>>(
      `${API_URL}/QuanLyNguoiDung/DangNhap`,
      submitDto
      // {
      //   headers: new HttpHeaders().append('TokenCybersoft', TOKEN_CYBERSOFT),
      // }
    );
  }
}
