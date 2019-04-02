import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  auth : AuthService;
  @Output() toggleSidenav = new EventEmitter();
  
  constructor(auth : AuthService) { 
    this.auth = auth;
  }

  ngOnInit() {
  }

  toggle(event: UIEvent): void{
    this.toggleSidenav.emit();
  }
}
