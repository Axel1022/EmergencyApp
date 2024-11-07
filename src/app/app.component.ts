import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/lista-eventos', icon: 'mail' },
    { title: 'Anadir', url: '/anadir-eventos', icon: 'paper-plane' },
    
  ];
  constructor() {}
}
