import { TestBed } from '@angular/core/testing';

import { HelloworldserviceService } from './helloworldservice.service';

describe('HelloworldserviceService', () => {
  let service: HelloworldserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloworldserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
