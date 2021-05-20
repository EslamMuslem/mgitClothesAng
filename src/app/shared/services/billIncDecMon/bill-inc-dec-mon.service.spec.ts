import { TestBed } from '@angular/core/testing';

import { BillIncDecMonService } from './bill-inc-dec-mon.service';

describe('BillIncDecMonService', () => {
  let service: BillIncDecMonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillIncDecMonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
