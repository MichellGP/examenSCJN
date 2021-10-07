import { TestBed } from '@angular/core/testing';

import { CorreolocalService } from './correolocal.service';

describe('CorreolocalService', () => {
  let service: CorreolocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreolocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
