import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent,
    data: {
      title: 'Create User',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUserRoutingModule {}
