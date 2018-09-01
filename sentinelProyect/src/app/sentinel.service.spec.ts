import { TestBed, inject } from '@angular/core/testing';

import { SentinelService } from './sentinel.service';

describe('SentinelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentinelService]
    });
  });

  it('should be created', inject([SentinelService], (service: SentinelService) => {
    expect(service).toBeTruthy();
  }));
});
