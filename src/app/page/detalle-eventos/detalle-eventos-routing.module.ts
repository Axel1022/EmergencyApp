import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEventosPage } from './detalle-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEventosPageRoutingModule {}
