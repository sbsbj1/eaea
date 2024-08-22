import { TestBed } from '@angular/core/testing';

import { InterfazConductorService } from './interfaz-conductor.service';

describe('InterfazConductorService', () => {
  let service: InterfazConductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfazConductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
