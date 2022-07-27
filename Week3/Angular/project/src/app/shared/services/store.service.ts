import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOGIN_INFO_KEY } from '../common/constants';
import { LoginDto } from '../common/interfaces';
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

  setLoginInfo(loginInfo: LoginDto) {
    this.store.next({ loginInfo });
  }
}

interface Store {
  loginInfo?: LoginDto;
}
