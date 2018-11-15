import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditLimitListComponent } from './customer-credit-limit-list.component';

describe('CustomerCreditLimitListComponent', () => {
  let component: CustomerCreditLimitListComponent;
  let fixture: ComponentFixture<CustomerCreditLimitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreditLimitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreditLimitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
