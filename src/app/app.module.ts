import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, MatDividerModule, MatSidenavModule } from '@angular/material';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { HikeEditorComponent } from './admin/hike-editor/hike-editor.component';
import { SectionEditorComponent } from './admin/section-editor/section-editor.component';
import { HtmlEditorComponent } from './admin/html-editor/html-editor.component';
import { GalleryEditorComponent } from './admin/gallery-editor/gallery-editor.component';
import { HikeComponent } from './hike/hike.component';
import { MapEditorComponent } from './admin/map-editor/map-editor.component';
import { AgmCoreModule } from '@agm/core';
import { FileUploadComponent } from './admin/file-upload/file-upload.component';
import { DropZoneDirectiveDirective } from './directives/drop-zone-directive.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { HikeSectionListComponent } from './admin/hike-section-list/hike-section-list.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HikesComponent } from './hikes/hikes.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginFormComponent } from './login-form/login-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,

    CKEditorModule,

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
    ),

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true  })
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
    NavComponent,
    GalleryComponent,
    SideNavComponent,
    HikesComponent,
    SectionsComponent,
    SectionComponent,
    LoginComponent,
    LoginFormComponent
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
