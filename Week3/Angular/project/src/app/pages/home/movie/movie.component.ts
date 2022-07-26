import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieId: number = 0;
  userId: number = 0;
  bookingId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { userId, bookingId } = this.activatedRoute.snapshot.queryParams;

    this.userId = userId;
    this.bookingId = bookingId;

    this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.movieId = params['id'];
      },
      error: () => {},
      complete: () => {},
    });
  }
}
