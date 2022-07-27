import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '@services/movie-service.service';
import { MovieDto, ResponseBodyDto } from 'src/app/shared/common/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movieList: MovieDto[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Cách 1: call api khi vào trang
    // this.movieService.getMovieList().subscribe({
    //   next: (result: ResponseBodyDto<MovieDto[]>) => {
    //     console.log(result);
    //     this.movieList = result.content;
    //   },
    //   error: (err: HttpErrorResponse) => {},
    //   complete: () => {},
    // });

    // Cách 2: Sử dụng data từ resolver trả về

    this.activatedRoute.data.subscribe((result) => {
      console.log(result);
      this.movieList = result['movieList'];
    });
  }

  navigateToMovie(movieId: number) {
    console.log(movieId);
    this.router.navigate(['home', 'movie', movieId]);
  }
}
