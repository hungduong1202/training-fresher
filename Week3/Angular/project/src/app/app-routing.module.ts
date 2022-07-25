import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    // loadChildren: () => HomeModule,

    // lazy loading
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
  { path: '', redirectTo: 'home/movie-list', pathMatch: 'full' },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
