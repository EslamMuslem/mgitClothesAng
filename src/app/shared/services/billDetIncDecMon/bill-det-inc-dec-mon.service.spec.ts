import { TestBed } from '@angular/core/testing';

import { BillDetIncDecMonService } from './bill-det-inc-dec-mon.service';

describe('BillDetIncDecMonService', () => {
  let service: BillDetIncDecMonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillDetIncDecMonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
