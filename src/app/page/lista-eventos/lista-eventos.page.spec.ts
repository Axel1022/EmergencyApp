import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEventosPage } from './lista-eventos.page';

describe('ListaEventosPage', () => {
  let component: ListaEventosPage;
  let fixture: ComponentFixture<ListaEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
