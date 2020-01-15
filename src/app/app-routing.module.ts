import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { FaculdadePesquisadaComponent } from './cursos/faculdade-pesquisada/faculdade-pesquisada.component';
import { CursoPesquisadoComponent } from './cursos/curso-pesquisado/curso-pesquisado.component';
import { FluxogComponent } from './grade-curricular/fluxog/fluxog.component';
import { MinhagradeComponent } from './grade-curricular/minhagrade/minhagrade.component';

const routes: Routes = [
  { path: '', component: CursosComponent },

  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoPesquisadoComponent },
  { path: 'faculdade/:id', component: FaculdadePesquisadaComponent },
  { path: 'fluxograma/:id', component: FluxogComponent },
  { path: 'minhagrade/:id', component: MinhagradeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: '**', component: CursosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
