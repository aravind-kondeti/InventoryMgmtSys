import { TestBed } from '@angular/core/testing';

import { CgguardService } from './cgguard.service';

describe('CgguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CgguardService = TestBed.get(CgguardService);
    expect(service).toBeTruthy();
  });
});
