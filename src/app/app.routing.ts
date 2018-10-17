import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./NavigationBar/home/home.component";
import { ProductComponent } from "./NavigationBar/product/product.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AboutusComponent } from "./NavigationBar/aboutus/aboutus.component";
import { ContactusComponent } from "./NavigationBar/contactus/contactus.component";

export const AppRoutes: Routes = [
  {path:'' ,component: HomeComponent},
  {path:'register' ,component: RegistrationComponent},
  {path:'login' ,component: LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'home',component:HomeComponent},

];
