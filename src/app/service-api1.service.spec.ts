import { TestBed } from '@angular/core/testing';

import { ServiceApi1Service } from './service-api1.service';

describe('ServiceApi1Service', () => {
  let service: ServiceApi1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApi1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
