import { Component, OnInit, Input } from '@angular/core';
import { HikeSection } from 'src/app/models/HikeSection';
import { HikeService } from 'src/app/services/hike.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hike-section-list',
  templateUrl: './hike-section-list.component.html',
  styleUrls: ['./hike-section-list.component.scss']
})
export class HikeSectionListComponent implements OnInit {

  sections: HikeSection[];

  @Input()  hikeId : string;

  constructor(private hikeService: HikeService, private router: Router) { }

  ngOnInit() {
    this.loadSections();
  }

  private loadSections(): void{
    this.hikeService.getHikeSections(this.hikeId).subscribe(sections => this.sections = sections);
  }

  sectionClick(section: HikeSection){
    console.log("[HikeSectionListComponent] sectionClick",section);
    this.router.navigateByUrl(`/admin/hikes/${this.hikeId}/section/${section.id}`);
  }
}
