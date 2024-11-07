import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEventosPageRoutingModule } from './lista-eventos-routing.module';

import { ListaEventosPage } from './lista-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEventosPageRoutingModule
  ],
  declarations: [ListaEventosPage]
})
export class ListaEventosPageModule {}
