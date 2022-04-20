import { TestBed } from '@angular/core/testing';

import { HomechildGuard } from './homechild.guard';

describe('HomechildGuard', () => {
  let guard: HomechildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomechildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
