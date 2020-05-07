import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvTxnComponent } from './add-inv-txn.component';

describe('AddInvTxnComponent', () => {
  let component: AddInvTxnComponent;
  let fixture: ComponentFixture<AddInvTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
