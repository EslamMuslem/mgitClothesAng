import { TestBed } from '@angular/core/testing';

import { PermissionStoreService } from './permission-store.service';

describe('PermissionStoreService', () => {
  let service: PermissionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
