import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { HikeSection } from 'src/app/models/HikeSection';
import { ActivatedRoute } from '@angular/router';
import { HikeService } from 'src/app/services/hike.service';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.scss']
})
export class SectionEditorComponent implements OnInit {
  private sectionId: string;
  private hikeId: string;

  @Input() hikeSection: HikeSection;

  constructor(
    private route: ActivatedRoute,
    private hikeService: HikeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loadHikeSection();
  }

  loadHikeSection(): void {
    this.sectionId = this.route.snapshot.paramMap.get('sectionId');
    this.hikeId = this.route.snapshot.paramMap.get('hikeId');

    this.hikeService.getHikeSection(this.hikeId, this.sectionId)
      .subscribe(hike => this.hikeSection = hike);
  }

  save(): void {
    this
      .hikeService.saveHikeSection(this.hikeId, this.hikeSection)
      .then(section => {
        this.sectionId = section.id;
      this.location.replaceState(`/admin/hikes/${this.hikeId}/section/${this.sectionId}`);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
