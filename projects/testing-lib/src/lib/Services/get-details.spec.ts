import { TestBed } from '@angular/core/testing';

import { GetdetailsService } from './get-details';

describe('GetDetails', () => {
  let service: GetdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
