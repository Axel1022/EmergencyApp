import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirEventosPage } from './anadir-eventos.page';

describe('AnadirEventosPage', () => {
  let component: AnadirEventosPage;
  let fixture: ComponentFixture<AnadirEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
