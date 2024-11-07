import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  photo: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  private events: Event[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.events = (await this.storage.get('events')) || [];
  }

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find((event) => event.id === id);
  }

  async addEvent(event: Event) {
    event.id = new Date().getTime();
    this.events.push(event);
    await this.storage.set('events', this.events);
  }
}
