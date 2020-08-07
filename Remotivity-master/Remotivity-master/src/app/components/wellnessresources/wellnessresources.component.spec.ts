import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessresourcesComponent } from './wellnessresources.component';

describe('WellnessresourcesComponent', () => {
  let component: WellnessresourcesComponent;
  let fixture: ComponentFixture<WellnessresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnessresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
