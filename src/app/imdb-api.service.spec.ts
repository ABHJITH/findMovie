import { TestBed } from '@angular/core/testing';

import { ImdbApiService } from './imdb-api.service';

describe('ImdbApiService', () => {
  let service: ImdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
