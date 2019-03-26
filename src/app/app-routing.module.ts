import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HikeComponent } from './hike/hike.component';
import { HikeEditorComponent } from './admin/hike-editor/hike-editor.component';
import { SectionEditorComponent } from './admin/section-editor/section-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hikes/:id', component: HikeComponent },
  { path: 'admin/hikes/:id', component: HikeEditorComponent },
  { path: 'admin/hikes', component: HikeEditorComponent },
  { path: 'admin/hikes/:hikeId/section/:sectionId', component: SectionEditorComponent },
{ path: 'admin/hikes/:hikeid/section', component: SectionEditorComponent }
];;

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
