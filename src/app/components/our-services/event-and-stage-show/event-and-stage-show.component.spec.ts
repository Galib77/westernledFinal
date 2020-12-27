import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAndStageShowComponent } from './event-and-stage-show.component';

describe('EventAndStageShowComponent', () => {
  let component: EventAndStageShowComponent;
  let fixture: ComponentFixture<EventAndStageShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAndStageShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAndStageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
