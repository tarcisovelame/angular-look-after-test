import { TestBed } from '@angular/core/testing';

import { CarouselHomeService } from './carousel-home.service';

describe('CarouselHomeService', () => {
  let service: CarouselHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
