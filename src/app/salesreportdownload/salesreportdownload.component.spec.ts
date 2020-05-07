import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreportdownloadComponent } from './salesreportdownload.component';

describe('SalesreportdownloadComponent', () => {
  let component: SalesreportdownloadComponent;
  let fixture: ComponentFixture<SalesreportdownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreportdownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreportdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
