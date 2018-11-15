package br.com.lexpontes.simple_credit_register.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import br.com.lexpontes.simple_credit_register.model.CreditCustomer;
import br.com.lexpontes.simple_credit_register.service.CreditCustomerService;

@RestController
@RequestMapping(value="/customer/credit/limit/")
public class RegisterCustomerController {
	@Autowired
	CreditCustomerService creditCustomerService;

	@PostMapping("register_customer_credit_limit") 
	public ResponseEntity registerCustomer(@RequestBody CreditCustomer data) {
		try {
			creditCustomerService.save(data);
		}
		catch(Exception e) {
			return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok(HttpStatus.OK);
	}

	@GetMapping("list_customers_credit_limit") 
	public ModelAndView listCustomers() {
		List<CreditCustomer> creditCustomers = new ArrayList<CreditCustomer>();
		
		creditCustomers = creditCustomerService.list();
		
		ModelAndView listCustomerCreditLimit = new ModelAndView();
		listCustomerCreditLimit.addObject("list", creditCustomers);
		return listCustomerCreditLimit;
	}
}
