import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalhealthComponent } from './mentalhealth.component';

describe('MentalhealthComponent', () => {
  let component: MentalhealthComponent;
  let fixture: ComponentFixture<MentalhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
