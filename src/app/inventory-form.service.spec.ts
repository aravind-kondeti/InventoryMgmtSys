import { TestBed } from '@angular/core/testing';

import { InventoryFormService } from './inventory-form.service';

describe('InventoryFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryFormService = TestBed.get(InventoryFormService);
    expect(service).toBeTruthy();
  });
});
