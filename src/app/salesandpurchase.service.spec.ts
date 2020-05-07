import { TestBed } from '@angular/core/testing';

import { SalesandpurchaseService } from './salesandpurchase.service';

describe('SalesandpurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesandpurchaseService = TestBed.get(SalesandpurchaseService);
    expect(service).toBeTruthy();
  });
});
