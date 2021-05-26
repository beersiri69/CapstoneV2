import { TestBed } from '@angular/core/testing';

import { PivalueService } from './pivalue.service';

describe('PivalueService', () => {
  let service: PivalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PivalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
