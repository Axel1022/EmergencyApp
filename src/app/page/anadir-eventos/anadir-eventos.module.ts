import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirEventosPageRoutingModule } from './anadir-eventos-routing.module';

import { AnadirEventosPage } from './anadir-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirEventosPageRoutingModule
  ],
  declarations: [AnadirEventosPage]
})
export class AnadirEventosPageModule {}
