import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { NavComponent } from './nav/nav.component';
import { FluxogComponent } from './fluxog/fluxog.component';
import { MinhagradeComponent } from './minhagrade/minhagrade.component';


@NgModule({
  declarations: [
    CursoComponent,
    NavComponent,
    FluxogComponent,
    MinhagradeComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule
  ]
})
export class CursoModule { }
