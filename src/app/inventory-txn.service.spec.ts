import { TestBed } from '@angular/core/testing';

import { InventoryTxnService } from './inventory-txn.service';

describe('InventoryTxnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryTxnService = TestBed.get(InventoryTxnService);
    expect(service).toBeTruthy();
  });
});
