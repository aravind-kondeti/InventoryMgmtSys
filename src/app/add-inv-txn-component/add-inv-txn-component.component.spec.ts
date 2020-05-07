import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvTxnComponentComponent } from './add-inv-txn-component.component';

describe('AddInvTxnComponentComponent', () => {
  let component: AddInvTxnComponentComponent;
  let fixture: ComponentFixture<AddInvTxnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvTxnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvTxnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
