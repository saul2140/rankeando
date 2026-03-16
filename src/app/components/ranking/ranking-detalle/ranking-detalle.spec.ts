import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetalle } from './ranking-detalle';

describe('RankingDetalle', () => {
  let component: RankingDetalle;
  let fixture: ComponentFixture<RankingDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
