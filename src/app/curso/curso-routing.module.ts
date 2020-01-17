import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso.component';
import { FluxogComponent } from './fluxog/fluxog.component';
import { MinhagradeComponent } from './minhagrade/minhagrade.component';

const routes: Routes = [
  { path: '', component: CursoComponent },
  { path: 'fluxograma/:id', component: FluxogComponent},
  { path: 'minhagrade/:id', component: MinhagradeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
