import { Component, OnInit, Input } from '@angular/core';
import { HikeSection } from 'src/app/models/HikeSection';
import { ActivatedRoute } from '@angular/router';
import { HikeServiceMock } from 'src/app/services/hike.service.mock';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {
  @Input() hikeSection: HikeSection;
  
  constructor(
    private route: ActivatedRoute,
    private hikeService: HikeServiceMock
  ) { }

  ngOnInit(): void {
    this.loadHikeSection();
  }

  loadHikeSection(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.hikeService.getHikeSection(id)
    //   .subscribe(hike => this.hikeSection = hike);
  }

  save(): void {
    // this.hikeService.saveHike(this.hike);
  }
}
