import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposDetalleComponent } from './equipo-detalle';

describe('EquipoDetalle', () => {
  let component: EquiposDetalleComponent;
  let fixture: ComponentFixture<EquiposDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
