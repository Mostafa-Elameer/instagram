import { TestBed } from '@angular/core/testing';

import { FackusersService } from './fackusers.service';

describe('FackusersService', () => {
  let service: FackusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FackusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
