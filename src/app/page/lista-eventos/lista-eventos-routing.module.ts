import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEventosPage } from './lista-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEventosPageRoutingModule {}
