import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerHomeComponent } from './prayer-home.component';

describe('PrayerHomeComponent', () => {
  let component: PrayerHomeComponent;
  let fixture: ComponentFixture<PrayerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
