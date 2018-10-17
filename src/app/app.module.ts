import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {AppRoutes} from "./app.routing";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from '../app/NavigationBar/home/home.component';
import { ContactusComponent } from '../app/NavigationBar/contactus/contactus.component';
import { AboutusComponent } from '../app/NavigationBar/aboutus/aboutus.component';
import { ProductComponent } from '../app/NavigationBar/product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './Services/login.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
