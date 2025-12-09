/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasServices } from './mascotas-services';

describe('MascotasServices', () => {
  let component: MascotasServices;
  let fixture: ComponentFixture<MascotasServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotasServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

import { TestBed } from '@angular/core/testing';

import { MascotaService } from './mascotas-services';

describe('MascotaService', () => {
  let service: MascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

