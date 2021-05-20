import { TestBed } from '@angular/core/testing';

import { TypePriceService } from './type-price.service';

describe('TypePriceService', () => {
  let service: TypePriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
