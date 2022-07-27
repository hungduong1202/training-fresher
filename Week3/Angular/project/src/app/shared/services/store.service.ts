import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOGIN_INFO_KEY } from '../common/constants';
import { LoginDto, MovieDto } from '../common/interfaces';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private store = new BehaviorSubject<Store>({});
  constructor(readonly localStorageService: LocalStorageService) {
    const loginInfo = this.localStorageService.get(LOGIN_INFO_KEY);
    if (loginInfo) {
      this.store.next({ loginInfo });
    }
  }

  store$: Observable<Store> = this.store.asObservable();

  getStoreValue() {
    return this.store.getValue();
  }

  setLoginInfo(loginInfo: LoginDto) {
    this.store.next({ loginInfo });
  }

  setMovieList(movieList: MovieDto[]) {
    const value = this.getStoreValue();
    this.store.next({ ...value, movieList });
  }

  setMovieDetail(movie: MovieDto) {
    const value = this.getStoreValue();
    this.store.next({
      ...value,
      movieDetail: {
        ...value.movieDetail,
        [movie.maPhim]: movie,
      },
    });
  }
}

interface Store {
  loginInfo?: LoginDto;
  movieList?: MovieDto[];
  movieDetail?: {
    [key: string]: MovieDto;
  };
}
