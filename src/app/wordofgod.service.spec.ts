import { TestBed } from '@angular/core/testing';

import { WordofgodService } from './wordofgod.service';

describe('WordofgodService', () => {
  let service: WordofgodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordofgodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
