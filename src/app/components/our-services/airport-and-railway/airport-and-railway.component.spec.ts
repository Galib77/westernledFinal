import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportAndRailwayComponent } from './airport-and-railway.component';

describe('AirportAndRailwayComponent', () => {
  let component: AirportAndRailwayComponent;
  let fixture: ComponentFixture<AirportAndRailwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportAndRailwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportAndRailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
