import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditLimitAddComponent } from './customer-credit-limit-add.component';

describe('CustomerCreditLimitAddComponent', () => {
  let component: CustomerCreditLimitAddComponent;
  let fixture: ComponentFixture<CustomerCreditLimitAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreditLimitAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreditLimitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
