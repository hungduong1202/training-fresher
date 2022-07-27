import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../common/constants';
import { MovieDto, ResponseBodyDto } from '../common/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMovieList(): Observable<ResponseBodyDto<MovieDto[]>> {
    return this.httpClient.get<ResponseBodyDto<MovieDto[]>>(
      `${API_URL}/QuanLyPhim/LayDanhSachPhim`,
      {
        params: { maNhom: 'GP07' },
      }
    );
  }

  getMovieDetail(movieId: number): Observable<ResponseBodyDto<MovieDto>> {
    return this.httpClient.get<ResponseBodyDto<MovieDto>>(
      `${API_URL}/QuanLyPhim/LayThongTinPhim`,
      {
        params: { MaPhim: movieId },
      }
    );
  }
}
