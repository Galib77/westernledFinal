import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallaboutComponent } from './smallabout.component';

describe('SmallaboutComponent', () => {
  let component: SmallaboutComponent;
  let fixture: ComponentFixture<SmallaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
