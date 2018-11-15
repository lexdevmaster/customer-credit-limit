import { Injectable } from '@angular/core';
import {httpClient} from '@angular/common/http';

const httpOptions = {
   headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
};

@Injectable()
export class CustomerCreditLimitService {
	
	customerCreditLimitUrl = "http://localhost:8080/customer/credit/limit/";
	customerCreditLimitListUrl = customerCreditLimitUrl + "/register_customer_credit_limit"; 
	customerCreditLimitAddUrl = customerCreditLimitUrl + "list_customers_credit_limit";
	
  constructor(private http: httpClient()) { }
  
  list() {
  	this.http.get<any[]>('${this.customerCreditLimitUrl}');
  }

  add(customerCreditLimit: CustomerCreditLimit): Observable<CustomerCreditLimit> {
    this.http.post(customerCreditLimitAddUrl, CustomerCreditLimit).subscribe();
}}
