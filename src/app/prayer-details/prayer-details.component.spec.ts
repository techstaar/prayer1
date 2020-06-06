import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerDetailsComponent } from './prayer-details.component';

describe('PrayerDetailsComponent', () => {
  let component: PrayerDetailsComponent;
  let fixture: ComponentFixture<PrayerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
