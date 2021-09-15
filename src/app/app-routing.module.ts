import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TramiteComponent } from './views/tramite/tramite.component';

const routes: Routes = [ { path: 'tramite', component: TramiteComponent,  pathMatch: 'full'},
 { path: '**',  pathMatch: 'full', redirectTo :'tramite'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
