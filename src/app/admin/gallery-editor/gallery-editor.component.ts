import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { GalleryImage } from 'src/app/models/GalleryImage';

@Component({
  selector: 'app-gallery-editor',
  templateUrl: './gallery-editor.component.html',
  styleUrls: ['./gallery-editor.component.scss']
})
export class GalleryEditorComponent implements OnInit {

  @Input() galleryPath: string;
  @Input() images: GalleryImage[];

  // Gallery items changed
  @Output() galleryChanged = new EventEmitter<GalleryImage[]>();

  constructor() { }

  ngOnInit() {
    console.log('[GalleryEditorComponent] on init', this.images);
  }

  onFileUploaded(downloadUrl: string) {
    console.log('[GalleryEditorComponent] file uploaded', downloadUrl);

    let img = { url: downloadUrl, title: 'New Image', description: 'This is a new image' } as GalleryImage;
    this.images.push(img);
    this.galleryChanged.emit(this.images);
  }
}
