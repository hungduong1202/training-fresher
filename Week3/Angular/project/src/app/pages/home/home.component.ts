import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '@services/store.service';
import { LoginDto } from 'src/app/shared/common/interfaces';
// import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginInfo: LoginDto | undefined = undefined;

  constructor(private router: Router, private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.store$.subscribe(
      (result) => (this.loginInfo = result.loginInfo)
    );
  }

  navigateToMovie() {
    const movieId = Date.now();
    this.router.navigate(['home', 'movie', movieId], {
      queryParams: {
        userId: 10,
        bookingId: 200,
      },
    });
  }
}
