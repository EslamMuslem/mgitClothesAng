import { TestBed } from '@angular/core/testing';

import { IncreaseDecreaseMoneyService } from './increase-decrease-money.service';

describe('IncreaseDecreaseMoneyService', () => {
  let service: IncreaseDecreaseMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncreaseDecreaseMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
