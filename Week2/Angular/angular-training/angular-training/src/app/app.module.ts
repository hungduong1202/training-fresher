import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { DemoInputOutputModule } from './input-output/demo-input-output/demo-input-output.module';
import { SeatBookingModule } from './input-output/seat-booking/seat-booking.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DataBindingModule,
    DirectivesModule,
    LoginModule,
    DemoInputOutputModule,
    SeatBookingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
