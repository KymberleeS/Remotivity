import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryhistoryComponent } from './entryhistory.component';

describe('EntryhistoryComponent', () => {
  let component: EntryhistoryComponent;
  let fixture: ComponentFixture<EntryhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
