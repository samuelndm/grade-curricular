import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './grade-curricular/nav/nav.component';
import { FluxogComponent } from './grade-curricular/fluxog/fluxog.component';
import { FooterComponent } from './footer/footer.component';
import { GradeCurricularComponent } from './grade-curricular/grade-curricular.component';
import { CursosComponent } from './cursos/cursos.component';
import { FaculdadePesquisadaComponent } from './cursos/faculdade-pesquisada/faculdade-pesquisada.component';
import { CursoPesquisadoComponent } from './cursos/curso-pesquisado/curso-pesquisado.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { PesquisarCursosComponent } from './cursos/pesquisar-cursos/pesquisar-cursos.component';
import { PesquisarFaculdadesComponent } from './cursos/pesquisar-faculdades/pesquisar-faculdades.component';
import { NavCursosComponent } from './cursos/nav-cursos/nav-cursos.component';
import { FaculdadesFilterPipe } from './cursos/faculdades-filter.pipe';
import { MinhagradeComponent } from './grade-curricular/minhagrade/minhagrade.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FluxogComponent,
    FooterComponent,
    GradeCurricularComponent,
    CursosComponent,
    FaculdadePesquisadaComponent,
    CursoPesquisadoComponent,
    EquipeComponent,
    AjudaComponent,
    PesquisarCursosComponent,
    PesquisarFaculdadesComponent,
    NavCursosComponent,
    FaculdadesFilterPipe,
    MinhagradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
