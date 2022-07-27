import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '@services/movie-service.service';
import { StoreService } from '@services/store.service';
import { map, Observable, of } from 'rxjs';
import { MovieDto } from '../../common/interfaces';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieDto> {
  constructor(
    private movieService: MovieService,
    private storeService: StoreService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieDto> {
    const movieId = route.params['id'];

    const value = this.storeService.getStoreValue();

    if (value.movieDetail && value.movieDetail[movieId]) {
      return of(value.movieDetail[movieId]);
    }

    return this.movieService.getMovieDetail(movieId).pipe(
      map((result) => {
        this.storeService.setMovieDetail(result.content);
        return result.content;
      })
    );
  }
}
