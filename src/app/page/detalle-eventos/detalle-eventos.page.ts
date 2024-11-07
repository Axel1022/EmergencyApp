import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EventServiceService,
  Event,
} from '../../services/event-service.service';

@Component({
  selector: 'app-detalle-eventos',
  templateUrl: './detalle-eventos.page.html',
  styleUrls: ['./detalle-eventos.page.scss'],
})
export class DetalleEventosPage implements OnInit {
  event: Event | undefined;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventServiceService
  ) {}

  ngOnInit() {
    const eventId = +this.route.snapshot.paramMap.get('id')!;
    this.event = this.eventService.getEventById(eventId);
  }
}
