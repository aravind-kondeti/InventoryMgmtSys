import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseProductComponentComponent } from './purchase-product-component.component';

describe('PurchaseProductComponentComponent', () => {
  let component: PurchaseProductComponentComponent;
  let fixture: ComponentFixture<PurchaseProductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseProductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
