import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { GradeCurricularComponent } from './grade-curricular/grade-curricular.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AjudaComponent } from './ajuda/ajuda.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'fluxograma', component: GradeCurricularComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'ajuda', component: AjudaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
