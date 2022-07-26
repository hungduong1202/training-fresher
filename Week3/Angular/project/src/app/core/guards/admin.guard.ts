// a-guard-can-activate
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LOGIN_INFO_KEY } from 'src/app/shared/common/constants';
import { LoginDto } from 'src/app/shared/common/interfaces';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loginInfo: LoginDto = this.localStorageService.get(LOGIN_INFO_KEY);

    console.log(loginInfo);

    if (loginInfo.maLoaiNguoiDung === 'KhachHang') {
      alert('Only admin can access');
      this.router.navigate(['/home/movie-list']);
      return false;
    }
    return true;
  }
}
