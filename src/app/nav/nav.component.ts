import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Headings } from '../models/Headings';
import { NavigationService } from '../services/navigation.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();

  navigation: NavigationService;

  constructor(navigation: NavigationService) {
    this.navigation = navigation;
  }

  ngOnInit() {
  }

  toggle(event: UIEvent): void {
    this.toggleSidenav.emit();
  }
}
