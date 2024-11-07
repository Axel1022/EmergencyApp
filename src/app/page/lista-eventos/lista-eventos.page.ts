import { Component, OnInit } from '@angular/core';
import {
  EventServiceService,
  Event,
} from '../../services/event-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.page.html',
  styleUrls: ['./lista-eventos.page.scss'],
})
export class ListaEventosPage implements OnInit {
  events: Event[] = [];
  constructor(
    private eventService: EventServiceService,
    private router: Router
  ) {}
  ionViewWillEnter() {
    this.events = this.eventService.getEvents();
  }

  viewEvent(id: number) {
    this.router.navigateByUrl(`/detalle-eventos/${id}`);
  }

  ngOnInit() {}
}
