import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioVisionComponent } from './mission-vision.component';

describe('MissioVisionComponent', () => {
  let component: MissioVisionComponent;
  let fixture: ComponentFixture<MissioVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
