import { TestBed, async, inject } from '@angular/core/testing';

import { AuthgruardGuard } from './authgruard.guard';

describe('AuthgruardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgruardGuard]
    });
  });

  it('should ...', inject([AuthgruardGuard], (guard: AuthgruardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
