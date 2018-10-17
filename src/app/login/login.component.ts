import {Router} from '@angular/router';
import {Response, Headers} from "@angular/http";
import { Component, OnInit } from '@angular/core';
import { Login } from '../Model/login.model';
import { LoginService } from '../Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login : Login;
  constructor(private router: Router, private loginservice: LoginService) {
    this.login = new Login();
  }

  ngOnInit() {
  }
}
