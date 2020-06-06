import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerWordofgodComponent } from './prayer-wordofgod.component';

describe('PrayerWordofgodComponent', () => {
  let component: PrayerWordofgodComponent;
  let fixture: ComponentFixture<PrayerWordofgodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerWordofgodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerWordofgodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
