import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from '../models/GalleryImage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() images: GalleryImage[];

  constructor() { }

  ngOnInit() {
  }

}
