import { TestBed } from '@angular/core/testing';

import { PermissionStoreDetailService } from './permission-store-detail.service';

describe('PermissionStoreDetailService', () => {
  let service: PermissionStoreDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionStoreDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
