import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTxnComponent } from './vendor-txn.component';

describe('VendorTxnComponent', () => {
  let component: VendorTxnComponent;
  let fixture: ComponentFixture<VendorTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
