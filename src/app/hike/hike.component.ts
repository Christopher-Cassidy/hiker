import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hike } from '../models/Hike';
import { HikeService } from '../services/hike.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.scss'],
  providers: [HikeService]

})
export class HikeComponent implements OnInit {
  sub: Subscription;
  hike: Hike;

  constructor(
    private service: HikeService,
    private route: ActivatedRoute,
    private navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.getHike();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getHike(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.sub = this.service.getHike(id).subscribe(val => {
      this.hike = val;
      this.navigation.reset(val.title, `/hikes/${val.id}`);
    });
  }
}
