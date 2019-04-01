import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HikeService } from '../services/hike.service';
import { HikeSection } from '../models/HikeSection';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  @Input() hikeId: string;
  sections: HikeSection[];
  
  constructor(private service: HikeService) { }

  ngOnInit() {
    this.service.getHikeSections(this.hikeId).subscribe(val => this.sections = val);
  }

}
