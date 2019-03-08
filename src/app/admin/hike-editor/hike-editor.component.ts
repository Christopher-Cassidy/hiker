import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/models/Hike';
import { HikeServiceMock } from 'src/app/services/hike.service.mock';
import { HikeService } from 'src/app/services/hike.service';
import { IHikeService } from 'src/app/services/IHikeService';


@Component({
  selector: 'app-hike-editor',
  templateUrl: './hike-editor.component.html',
  styleUrls: ['./hike-editor.component.css'],
  providers: [HikeService]
})
export class HikeEditorComponent implements OnInit {
  @Input() hike: Hike;

  constructor(
    private route: ActivatedRoute,
    private hikeService: HikeService
  ) { }

  ngOnInit(): void {
    this.loadHike();
  }

  loadHike(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.hikeService.getHike(id)
        .subscribe(hike => this.hike = hike);
    }
    else {
    this.hike = new Hike();
    }
  }

  save(): void {
    this.hikeService.saveHike(this.hike);
  }
}
