import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManagementService } from 'src/app/shared/services/management.service';
import { LoginComponent } from './login/login.component';

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
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
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
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [ManagementService],
})
export class HomeModule {}
