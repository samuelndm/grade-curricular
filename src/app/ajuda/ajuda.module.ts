import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjudaRoutingModule } from './ajuda-routing.module';
import { AjudaComponent } from './ajuda.component';


@NgModule({
  declarations: [AjudaComponent],
  imports: [
    CommonModule,
    AjudaRoutingModule
  ]
})
export class AjudaModule { }
