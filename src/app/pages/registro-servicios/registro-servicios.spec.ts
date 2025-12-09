import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroServicios } from './registro-servicios';

describe('RegistroServicios', () => {
  let component: RegistroServicios;
  let fixture: ComponentFixture<RegistroServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroServicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroServicios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
