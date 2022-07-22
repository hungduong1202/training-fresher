import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CarouselComponent, MoviesComponent, HomeComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
