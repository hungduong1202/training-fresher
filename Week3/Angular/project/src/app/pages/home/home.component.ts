import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
