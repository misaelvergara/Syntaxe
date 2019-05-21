import { TestBed } from '@angular/core/testing';

import { TellBarService } from './tell-bar.service';

describe('TellBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TellBarService = TestBed.get(TellBarService);
    expect(service).toBeTruthy();
  });
});
