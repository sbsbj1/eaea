import { TestBed } from '@angular/core/testing';

import { SConductorService } from './sconductor.service';

describe('SConductorService', () => {
  let service: SConductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SConductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
