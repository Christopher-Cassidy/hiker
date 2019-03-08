import { Component, OnInit, Input } from '@angular/core';
import { IHikeService } from '../services/IHikeService';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hike } from '../models/Hike';
import { HikeService } from '../services/hike.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css'],
  providers: [HikeService]

})
export class HikeComponent implements OnInit {
  sub: Subscription;
  hike: Hike;

  constructor(private service: HikeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHike();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getHike(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.sub = this.service.getHike(id).subscribe(obs => {
      this.hike = obs;
      console.log(obs);
    });
  }
}
