import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { PesquisarCursosComponent } from './pesquisar-cursos/pesquisar-cursos.component';
import { PesquisarFaculdadesComponent } from './pesquisar-faculdades/pesquisar-faculdades.component';
import { CursoPesquisadoComponent } from './curso-pesquisado/curso-pesquisado.component';
import { FaculdadePesquisadaComponent } from './faculdade-pesquisada/faculdade-pesquisada.component';


@NgModule({
  declarations: [
    CursosComponent,
    PesquisarCursosComponent,
    PesquisarFaculdadesComponent,
    CursoPesquisadoComponent,
    FaculdadePesquisadaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ]
})
export class CursosModule { }
