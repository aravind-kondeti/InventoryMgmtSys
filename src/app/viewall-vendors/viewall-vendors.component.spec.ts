import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallVendorsComponent } from './viewall-vendors.component';

describe('ViewallVendorsComponent', () => {
  let component: ViewallVendorsComponent;
  let fixture: ComponentFixture<ViewallVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
