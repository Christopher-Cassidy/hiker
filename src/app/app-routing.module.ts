import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
import { HikeComponent } from './hike/hike.component';
import { HikeEditorComponent } from './admin/hike-editor/hike-editor.component';
import { SectionEditorComponent } from './admin/section-editor/section-editor.component';
import { HikesComponent } from './hikes/hikes.component';
import { SectionComponent } from './section/section.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { environment } from 'src/environments/environment';

export const spaConfig = environment.spa;

const routes: Routes = [
  { path: '', redirectTo: '/hikes', pathMatch: 'full' },

  { path: 'hikes', component: HikesComponent },
  { path: 'hikes/:id', component: HikeComponent },
  { path: 'hikes/:hikeId/section/:sectionId', component: SectionComponent },

  { path: 'admin', canActivate: [AuthGuardService], children: [
      { path: 'hikes', component: HikeEditorComponent },
      { path: 'hikes/:id', component: HikeEditorComponent },
      { path: 'hikes/:hikeId/section', component: SectionEditorComponent },
      { path: 'hikes/:hikeId/section/:sectionId', component: SectionEditorComponent },
    ]
  },

  { path: 'login', component: LoginFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: spaConfig.enableTracing, useHash: spaConfig.useHash })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
