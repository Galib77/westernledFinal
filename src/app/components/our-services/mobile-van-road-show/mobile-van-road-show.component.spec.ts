import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVanRoadShowComponent } from './mobile-van-road-show.component';

describe('MobileVanRoadShowComponent', () => {
  let component: MobileVanRoadShowComponent;
  let fixture: ComponentFixture<MobileVanRoadShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVanRoadShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVanRoadShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
