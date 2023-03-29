import { TestBed } from '@angular/core/testing';

import { StateCityServiceService } from './state-city-service.service';

describe('StateCityServiceService', () => {
  let service: StateCityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateCityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
