import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth : AuthService
  showRegister: boolean = false;
  
  constructor(auth : AuthService) { 
    this.auth = auth;
  }

  ngOnInit() {
  }

  isAuthenticated(): boolean{ return this.auth.user !== null;
  }

}
