import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereportdownloadComponent } from './purchasereportdownload.component';

describe('PurchasereportdownloadComponent', () => {
  let component: PurchasereportdownloadComponent;
  let fixture: ComponentFixture<PurchasereportdownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasereportdownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasereportdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
