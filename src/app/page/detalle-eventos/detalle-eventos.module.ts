import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEventosPageRoutingModule } from './detalle-eventos-routing.module';

import { DetalleEventosPage } from './detalle-eventos.page';
// Gary Campusano 2022-1022
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEventosPageRoutingModule
  ],
  declarations: [DetalleEventosPage]
})
export class DetalleEventosPageModule {}
