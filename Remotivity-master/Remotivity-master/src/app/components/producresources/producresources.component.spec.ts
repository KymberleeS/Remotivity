import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducresourcesComponent } from './producresources.component';

describe('ProducresourcesComponent', () => {
  let component: ProducresourcesComponent;
  let fixture: ComponentFixture<ProducresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
