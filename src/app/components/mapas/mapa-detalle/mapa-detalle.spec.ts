import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalle } from './mapa-detalle';

describe('MapaDetalle', () => {
  let component: MapaDetalle;
  let fixture: ComponentFixture<MapaDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
