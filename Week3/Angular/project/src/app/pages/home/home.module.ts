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
// import { ManagementService } from 'src/app/shared/services/management.service';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { FormGuard } from 'src/app/core/guards/form.guard';
import { PipeComponent } from './pipe/pipe.component';
import { WelcomePipe } from './pipe/welcome.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './life-cycle/life-cycle-child.component';
import { ManagementService } from '@services/management.service';
import { MovieListResolver } from 'src/app/shared/resolvers/movie/movie-list.resolver';
import { MovieResolver } from 'src/app/shared/resolvers/movie/movie.resolver';

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
        canActivate: [AdminGuard],
      },
      {
        path: 'movie-list',
        component: MovieListComponent,
        resolve: {
          movieList: MovieListResolver,
        },
      },
      {
        path: 'movie/:id',
        component: MovieComponent,
        resolve: {
          movieDetail: MovieResolver,
          // movieList: MovieListResolver,
        },
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        canDeactivate: [FormGuard],
      },
      {
        path: 'pipe',
        component: PipeComponent,
      },
      {
        path: 'life-cycle',
        component: LifeCycleComponent,
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
    PipeComponent,
    WelcomePipe,
    LifeCycleComponent,
    LifeCycleChildComponent,
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
