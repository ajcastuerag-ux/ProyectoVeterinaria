import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVeterinarios } from './registro-veterinarios';

describe('RegistroVeterinarios', () => {
  let component: RegistroVeterinarios;
  let fixture: ComponentFixture<RegistroVeterinarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVeterinarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVeterinarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
