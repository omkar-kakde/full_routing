import { TestBed } from '@angular/core/testing';

import { ProducutsService } from './producuts.service';

describe('ProducutsService', () => {
  let service: ProducutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
