import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mixesComponent } from './mixes.component';

describe('mixesComponent', () => {
  let component: mixesComponent;
  let fixture: ComponentFixture<mixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
