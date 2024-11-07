import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEventosPage } from './detalle-eventos.page';

describe('DetalleEventosPage', () => {
  let component: DetalleEventosPage;
  let fixture: ComponentFixture<DetalleEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
