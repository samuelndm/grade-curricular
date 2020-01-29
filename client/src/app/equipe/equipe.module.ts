import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { NavEquipeComponent } from './nav-equipe/nav-equipe.component';


@NgModule({
  declarations: [EquipeComponent, NavEquipeComponent],
  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
