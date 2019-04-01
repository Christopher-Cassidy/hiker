import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HikeSection } from '../models/HikeSection';
import { ActivatedRoute } from '@angular/router';
import { HikeService } from '../services/hike.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  sub: Subscription;
  section: HikeSection;

  private hikeId: string;
  private sectionId: string;

  constructor(
    private service: HikeService,
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) { }

  ngOnInit() {
    this.getHikeSection();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getHikeSection(): void {
    this.hikeId = this.route.snapshot.paramMap.get('hikeId');
    this.sectionId = this.route.snapshot.paramMap.get('sectionId');
    
    this.sub = this.service.getHikeSection(this.hikeId, this.sectionId).subscribe(val => {
      this.section = val;
      this.navigation.push(val.title, `/hikes/${this.hikeId}/section/${this.sectionId}`);
      console.log('[SectionComponent] load section', val);
    });
  }
}
