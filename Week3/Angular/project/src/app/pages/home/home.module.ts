import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'movie', component: MovieComponent },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'movie-list',
        component: MovieListComponent,
      },
      {
        path: 'movie/:id',
        component: MovieComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AboutComponent,
    FaqComponent,
    MovieComponent,
    MovieListComponent,
    HomeComponent,
  ],
  imports: [RouterModule.forChild(routes)],
})
export class HomeModule {}
