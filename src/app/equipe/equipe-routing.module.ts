import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipeComponent } from './equipe.component';

const routes: Routes = [{ path: '', component: EquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
