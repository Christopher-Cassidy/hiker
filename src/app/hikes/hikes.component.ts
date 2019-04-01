import { Component, OnInit, Input } from '@angular/core';
import { HikeService } from '../services/hike.service';
import { Hike } from '../models/Hike';

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.scss']
})
export class HikesComponent implements OnInit {
  @Input() hikes: Hike[];
  
  constructor(private hikeService: HikeService) { }

  ngOnInit() {
    this.hikeService.getHikes().subscribe(val => this.hikes = val);
  }

}
