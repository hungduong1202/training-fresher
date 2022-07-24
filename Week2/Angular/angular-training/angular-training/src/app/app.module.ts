import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { InputOutputModule } from './input-output/input-output.module';
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
    InputOutputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
