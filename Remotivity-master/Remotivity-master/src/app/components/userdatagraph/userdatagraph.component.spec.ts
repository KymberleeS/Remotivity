import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdatagraphComponent } from './userdatagraph.component';

describe('UserdatagraphComponent', () => {
  let component: UserdatagraphComponent;
  let fixture: ComponentFixture<UserdatagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdatagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdatagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
