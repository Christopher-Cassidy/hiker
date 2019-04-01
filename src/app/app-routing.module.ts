import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HikeComponent } from './hike/hike.component';
import { HikeEditorComponent } from './admin/hike-editor/hike-editor.component';
import { SectionEditorComponent } from './admin/section-editor/section-editor.component';
import { HikesComponent } from './hikes/hikes.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: '', redirectTo: '/hikes', pathMatch: 'full' },
  
  { path: 'hikes', component: HikesComponent },
  { path: 'hikes/:id', component: HikeComponent },
  { path: 'hikes/:hikeId/section/:sectionId', component: SectionComponent },
  
  { path: 'admin/hikes', component: HikeEditorComponent },
  { path: 'admin/hikes/:id', component: HikeEditorComponent },
  { path: 'admin/hikes/:hikeid/section', component: SectionEditorComponent },
  { path: 'admin/hikes/:hikeId/section/:sectionId', component: SectionEditorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
