import { TestBed } from '@angular/core/testing';

import { DesktopGuard } from './desktop.guard';

describe('OrientationScreenGuard', () => {
  let guard: DesktopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesktopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
