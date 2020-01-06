import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { GradeCurricularComponent } from './grade-curricular/grade-curricular.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { FaculdadePesquisadaComponent } from './cursos/faculdade-pesquisada/faculdade-pesquisada.component';
import { CursoPesquisadoComponent } from './cursos/curso-pesquisado/curso-pesquisado.component';
import { CursoListaComponent } from './cursos/curso-lista/curso-lista.component';

const routes: Routes = [
  { path: '', component: CursosComponent },

  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoPesquisadoComponent },
  { path: 'fluxograma', component: GradeCurricularComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'faculdade', component: FaculdadePesquisadaComponent },
  { path: "cursos/cursoLista", component: CursoListaComponent },
  { path: '**', component: CursosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
