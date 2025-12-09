import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMascotas } from './registro-mascotas';


describe('RegistroMascotas', () => {
  let component: RegistroMascotas;
  let fixture: ComponentFixture<RegistroMascotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMascotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMascotas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
