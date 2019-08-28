import { TestBed } from '@angular/core/testing';

import { CaseroService } from './casero.service';

describe('CaseroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseroService = TestBed.get(CaseroService);
    expect(service).toBeTruthy();
  });
});
