import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule} from '@angular/material';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { HikeEditorComponent } from './admin/hike-editor/hike-editor.component';
import { SectionEditorComponent } from './admin/section-editor/section-editor.component';
import { HtmlEditorComponent } from './admin/html-editor/html-editor.component';
import { GalleryEditorComponent } from './admin/gallery-editor/gallery-editor.component';
import { HikeComponent } from './hike/hike.component';
import { environment } from 'src/environments/environment';
import { MapEditorComponent } from './admin/map-editor/map-editor.component';
import { AgmCoreModule } from '@agm/core';
import { FileUploadComponent } from './admin/file-upload/file-upload.component';
import { DropZoneDirectiveDirective } from './directives/drop-zone-directive.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { HikeSectionListComponent } from './admin/hike-section-list/hike-section-list.component';
import { NavComponent } from './nav/nav.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyrpKVNa6KGT2T0LMdjPBZ2yqPDTI9g_U'
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HikeEditorComponent,
    SectionEditorComponent,
    HtmlEditorComponent,
    GalleryEditorComponent,
    HikeComponent,
    MapEditorComponent,
    FileUploadComponent,
    DropZoneDirectiveDirective,
    FileSizePipe,
    HikeSectionListComponent,
    NavComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
