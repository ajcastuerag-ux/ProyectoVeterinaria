import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVeterinarios } from './listado-veterinarios';

describe('ListadoVeterinarios', () => {
  let component: ListadoVeterinarios;
  let fixture: ComponentFixture<ListadoVeterinarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoVeterinarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVeterinarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
