import { TestBed } from '@angular/core/testing';

import { AdviceService } from './Adviceservice.service';

describe('AdviceServiceService', () => {
  let service: AdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
