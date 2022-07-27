import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movieId: number = 0;
  userId: number = 0;
  bookingId: number = 0;

  rootSubscription: Subscription | undefined = undefined;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { userId, bookingId } = this.activatedRoute.snapshot.queryParams;

    this.userId = userId;
    this.bookingId = bookingId;

    this.rootSubscription = this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.movieId = params['id'];
      },
      error: () => {},
      complete: () => {},
    });
  }

  ngOnDestroy(): void {
    this.rootSubscription && this.rootSubscription.unsubscribe;
  }
}
