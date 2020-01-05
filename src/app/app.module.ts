import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FluxogComponent } from './fluxog/fluxog.component';
import { FooterComponent } from './footer/footer.component';
import { GradeCurricularComponent } from './grade-curricular/grade-curricular.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosPesquisadosComponent } from './cursos/cursos-pesquisados/cursos-pesquisados.component';
import { CursosPesquisadoComponent } from './cursos/cursos-pesquisado/cursos-pesquisado.component';
import { FaculdadePesquisadaComponent } from './cursos/faculdade-pesquisada/faculdade-pesquisada.component';
import { CursoPesquisadoComponent } from './cursos/curso-pesquisado/curso-pesquisado.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FluxogComponent,
    FooterComponent,
    GradeCurricularComponent,
    CursosComponent,
    CursosPesquisadosComponent,
    CursosPesquisadoComponent,
    FaculdadePesquisadaComponent,
    CursoPesquisadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
