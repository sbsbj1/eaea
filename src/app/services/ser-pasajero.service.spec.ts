import { TestBed } from '@angular/core/testing';

import { SerPasajeroService } from './ser-pasajero.service';

describe('SerPasajeroService', () => {
  let service: SerPasajeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerPasajeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
