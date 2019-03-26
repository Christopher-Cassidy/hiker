import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/models/Hike';
import { HikeService } from 'src/app/services/hike.service';
import { fromEvent, of, Observable, pipe } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, tap, auditTime, sampleTime } from 'rxjs/operators';
import { GalleryImage } from 'src/app/models/GalleryImage';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hike-editor',
  templateUrl: './hike-editor.component.html',
  styleUrls: ['./hike-editor.component.css'],
  providers: [HikeService]
})
export class HikeEditorComponent implements OnInit {
  @Input() hike: Hike;

  private form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private hikeService: HikeService
  ) { }

  ngOnInit(): void {
    this.loadHike();
  }

  loadHike(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('[HikeEditorComponent] load hike', id);

    if (id !== null)
      this.hikeService.getHike(id).subscribe(val => this.hike = val);
    else
      this.hike = new Hike();
  }

  onFileUploaded(downloadUrl: string) {
    console.log('[HikeEditorComponent] map data uploaded', downloadUrl);

    this.hike.mapDataUrl = downloadUrl;
  }

  onGalleryChanged(images: GalleryImage[]) {
    console.log('[HikeEditorComponent] gallery changed', images);

    this.hike.gallery = images;
    this.hike = this.hike;

    console.log('[HikeEditorComponent] hike changed', this.hike);
  }

  // modelChange(e: KeyboardEvent): void {
  //   //console.log(e);

  //   //of(e)
  //   var eventObs = fromEvent(e.target, e.type)
  //     .pipe(
  //       map(evt => e.currentTarget.value),
  //       auditTime(1000))
  //     .subscribe(evt => {
  //       // console.log('[HikeEditorComponent] audit event', evt);
  //       console.log('[HikeEditorComponent] Model changed, saving changes', this.hike);
  //       this.hikeService.saveHike(this.hike);
  //     });
  // }

  save(): void {
    console.log('[HikeEditorComponent] save hike', this.hike);

    this.hikeService.saveHike(this.hike)
  }
}
