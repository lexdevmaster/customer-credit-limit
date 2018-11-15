import { Component, OnInit } from '@angular/core';
import {CustomerCreditLimitService} from "../customer-credit-limit.service";

@Component({
  selector: 'app-customer-credit-limit-list',
  templateUrl: './customer-credit-limit-list.component.html',
  styleUrls: ['./customer-credit-limit-list.component.css']
})
export class CustomerCreditLimitListComponent implements OnInit {

 customerCreditLimit = Array<any>;
 
  constructor(private customerCreditLimitService: CustomerCreditLimitService ) { }

  ngOnInit() {
  
  }
  
  list() {
  	this.contatoService.list().subscribe(data => this.customerCreditLimit = data);
  }

}
