import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoPesquisadoComponent } from './curso-pesquisado/curso-pesquisado.component';
import { FaculdadePesquisadaComponent } from './faculdade-pesquisada/faculdade-pesquisada.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'curso-pesq/:id', component: CursoPesquisadoComponent },
  { path: 'faculdade/:id', component: FaculdadePesquisadaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
