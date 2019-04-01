import { Injectable, OnInit } from '@angular/core';
import { Headings } from '../models/Headings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {

  private ts : string = new Date().toISOString();
  headings: Headings = {} as Headings;

  constructor() { 
    console.log('[NavigationService] init', this.ts);
  }

  ngOnInit(): void {
  }

  clear() : void {
    console.log('[NavigationService] clear', this.ts);
    
    this.headings = {} as Headings;
  }

  reset(title: string, url: string) : void {
    console.log('[NavigationService] reset', {title: title, url: url, ts: this.ts});
    
    this.clear();
    this.push(title, url);
  }

  push(title: string, url: string) : void {
    console.log('[NavigationService] push', {title: title, url: url, ts: this.ts});

    let newHeading = {} as Headings;
    newHeading.SubTitle = this.headings.Title;
    newHeading.SubTitleLinkUrl = this.headings.TitleLinkUrl;
    newHeading.Title = title;
    newHeading.TitleLinkUrl = url;

    this.headings = newHeading;
  }
}
