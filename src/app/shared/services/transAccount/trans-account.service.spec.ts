import { TestBed } from '@angular/core/testing';

import { TransAccountService } from './trans-account.service';

describe('TransAccountService', () => {
  let service: TransAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
