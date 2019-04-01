import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle(event: UIEvent): void{
    this.toggleSidenav.emit();
  }
}
