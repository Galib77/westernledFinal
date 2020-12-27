import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingBoardsComponent } from './scrolling-boards.component';

describe('ScrollingBoardsComponent', () => {
  let component: ScrollingBoardsComponent;
  let fixture: ComponentFixture<ScrollingBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
