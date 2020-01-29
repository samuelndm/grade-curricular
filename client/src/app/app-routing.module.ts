import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cursos',
    pathMatch: 'full'
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule)
  },
  { path: 'equipe', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
  { path: 'ajuda', loadChildren: () => import('./ajuda/ajuda.module').then(m => m.AjudaModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
