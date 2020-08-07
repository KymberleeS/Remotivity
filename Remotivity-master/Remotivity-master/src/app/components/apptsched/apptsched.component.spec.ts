import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptschedComponent } from './apptsched.component';

describe('ApptschedComponent', () => {
  let component: ApptschedComponent;
  let fixture: ComponentFixture<ApptschedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptschedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
