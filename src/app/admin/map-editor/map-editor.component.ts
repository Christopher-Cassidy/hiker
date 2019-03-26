import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.css']
})
export class MapEditorComponent implements OnInit {
  @Input() mapDataUrl: string;

  constructor() { }

  ngOnInit() { 
    console.log('[MapEditorComponent] init', this.mapDataUrl);
  }

}
