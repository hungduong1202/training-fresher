import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params['id'];
    const queryParams = this.activatedRoute.snapshot.queryParams;
    console.log(movieId, queryParams);
  }
}
