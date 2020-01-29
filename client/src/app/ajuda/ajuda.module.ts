import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjudaRoutingModule } from './ajuda-routing.module';
import { AjudaComponent } from './ajuda.component';
import { NavAjudaComponent } from './nav-ajuda/nav-ajuda.component';


@NgModule({
  declarations: [AjudaComponent, NavAjudaComponent],
  imports: [
    CommonModule,
    AjudaRoutingModule
  ]
})
export class AjudaModule { }
