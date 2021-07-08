import { TestBed } from '@angular/core/testing';

import { PublicationsDataServiceService } from './publications-data-service.service';

describe('PublicationsDataServiceService', () => {
  let service: PublicationsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
