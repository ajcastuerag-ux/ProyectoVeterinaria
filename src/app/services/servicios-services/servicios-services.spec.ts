import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicios-services';

describe('ServicioService', () => {
  let services: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    services = TestBed.inject(ServicioService);
  });
  it('should create', () => {
    expect(services).toBeTruthy();
  });
});

