import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDHologramFanComponent } from './three-d-hologram-fan.component';

describe('ThreeDHologramFanComponent', () => {
  let component: ThreeDHologramFanComponent;
  let fixture: ComponentFixture<ThreeDHologramFanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDHologramFanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDHologramFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
