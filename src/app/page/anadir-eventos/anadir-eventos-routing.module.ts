import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirEventosPage } from './anadir-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirEventosPageRoutingModule {}
