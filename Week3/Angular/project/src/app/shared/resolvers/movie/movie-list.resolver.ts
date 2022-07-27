// a-resolver

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '@services/movie-service.service';
import { StoreService } from '@services/store.service';
import { Observable, map, of } from 'rxjs';
import { MovieDto, ResponseBodyDto } from '../../common/interfaces';

@Injectable({ providedIn: 'root' })
export class MovieListResolver implements Resolve<MovieDto[]> {
  constructor(
    private movieService: MovieService,
    private storeService: StoreService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieDto[]> {
    const value = this.storeService.getStoreValue();

    if (value.movieList) {
      return of(value.movieList);
    }

    return this.movieService.getMovieList().pipe(
      map((result) => {
        this.storeService.setMovieList(result.content);
        return result.content;
      })
    );
  }
}
