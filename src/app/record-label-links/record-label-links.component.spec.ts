import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLabelLinksComponent } from './record-label-links.component';

describe('RecordLabelLinksComponent', () => {
  let component: RecordLabelLinksComponent;
  let fixture: ComponentFixture<RecordLabelLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordLabelLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordLabelLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
