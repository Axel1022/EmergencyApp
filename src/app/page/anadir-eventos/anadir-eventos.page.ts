import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  EventServiceService,
  Event,
} from '../../services/event-service.service';

@Component({
  selector: 'app-anadir-eventos',
  templateUrl: './anadir-eventos.page.html',
  styleUrls: ['./anadir-eventos.page.scss'],
})
export class AnadirEventosPage implements OnInit {
  event: Event = {
    id: 0,
    date: '',
    title: '',
    description: '',
    photo: '',
  };

  constructor(
    private eventService: EventServiceService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.event.photo = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  async addEvent() {
    await this.eventService.addEvent(this.event);
    this.event = {
      id: 0,
      date: '',
      title: '',
      description: '',
      photo: '',
    };
    this.router.navigateByUrl('/lista-eventos');
  }

  ngOnInit() {}
}
