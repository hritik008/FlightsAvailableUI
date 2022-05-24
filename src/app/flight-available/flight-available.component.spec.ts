import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAvailableComponent } from './flight-available.component';

describe('FlightAvailableComponent', () => {
  let component: FlightAvailableComponent;
  let fixture: ComponentFixture<FlightAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
