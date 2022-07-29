import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { ButtonModule, FormModule, GridModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    FormModule,
    ButtonModule,
    FormsModule,
    GridModule
  ],
})
export class CreateUserModule {}
