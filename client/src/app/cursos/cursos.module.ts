import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { PesquisarCursosComponent } from './pesquisar-cursos/pesquisar-cursos.component';
import { PesquisarFaculdadesComponent } from './pesquisar-faculdades/pesquisar-faculdades.component';
import { CursoPesquisadoComponent } from './curso-pesquisado/curso-pesquisado.component';
import { FaculdadePesquisadaComponent } from './faculdade-pesquisada/faculdade-pesquisada.component';
import { NavCursosComponent } from './nav-cursos/nav-cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    PesquisarCursosComponent,
    PesquisarFaculdadesComponent,
    CursoPesquisadoComponent,
    FaculdadePesquisadaComponent,
    NavCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ]
})
export class CursosModule { }
