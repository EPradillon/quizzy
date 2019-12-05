import { TestBed, async, inject } from '@angular/core/testing';

import { EnableGuard } from './enable.guard';

describe('EnableGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnableGuard]
    });
  });

  it('should ...', inject([EnableGuard], (guard: EnableGuard) => {
    expect(guard).toBeTruthy();
  }));
});
