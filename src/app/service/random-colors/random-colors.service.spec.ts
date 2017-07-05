import { TestBed, inject } from '@angular/core/testing';

import { RandomColorsService } from './random-colors.service';

describe('RandomColorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomColorsService]
    });
  });

  it('should be created', inject([RandomColorsService], (service: RandomColorsService) => {
    expect(service).toBeTruthy();
  }));
});
