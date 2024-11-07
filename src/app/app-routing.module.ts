import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista-eventos',
    pathMatch: 'full',
  },
  {
    path: 'lista-eventos',
    loadChildren: () =>
      import('./page/lista-eventos/lista-eventos.module').then(
        (m) => m.ListaEventosPageModule
      ),
  },
  {
    path: 'anadir-eventos',
    loadChildren: () =>
      import('./page/anadir-eventos/anadir-eventos.module').then(
        (m) => m.AnadirEventosPageModule
      ),
  },
  {
    path: 'detalle-eventos/:id',
    loadChildren: () =>
      import('./page/detalle-eventos/detalle-eventos.module').then(
        (m) => m.DetalleEventosPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
