import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './pages/app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { GuitarCataloguePage } from './pages/guitar-catalogue/guitar-catalogue.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    GuitarCataloguePage,
    ProfilePage,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
