import { TestBed, inject } from '@angular/core/testing';

import { ZadatakService } from './zadatak.service';

describe('ZadatakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZadatakService]
    });
  });

  it('should be created', inject([ZadatakService], (service: ZadatakService) => {
    expect(service).toBeTruthy();
  }));
});
