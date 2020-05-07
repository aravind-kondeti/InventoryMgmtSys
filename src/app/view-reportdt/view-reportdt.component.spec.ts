import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportdtComponent } from './view-reportdt.component';

describe('ViewReportdtComponent', () => {
  let component: ViewReportdtComponent;
  let fixture: ComponentFixture<ViewReportdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReportdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
