import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { FormModule, PaginationModule, TableModule, UtilitiesModule } from '@coreui/angular';
import { ModalModule, ButtonModule, GridModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [UserComponent, UserModalComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule,
    UtilitiesModule,
    ModalModule,
    ButtonModule,
    GridModule,
    FormModule,
    FormsModule,
    ModalModule,
    PaginationModule,
  ],
})
export class UserModule {}
