import { TestBed, inject } from '@angular/core/testing';

import { CustomerCreditLimitService } from './customer-credit-limit.service';

describe('CustomerCreditLimitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerCreditLimitService]
    });
  });

  it('should be created', inject([CustomerCreditLimitService], (service: CustomerCreditLimitService) => {
    expect(service).toBeTruthy();
  }));
});
