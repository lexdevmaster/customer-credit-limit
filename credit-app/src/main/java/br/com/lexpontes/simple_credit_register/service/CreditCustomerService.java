package br.com.lexpontes.simple_credit_register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.lexpontes.simple_credit_register.model.CreditCustomer;
import br.com.lexpontes.simple_credit_register.repo.CreditCustomerRepo;

@Service
public class CreditCustomerService {
	@Autowired
	CreditCustomerRepo creditCustomerRepo;
	
	public void save(CreditCustomer data) throws Exception {
		try {
			creditCustomerRepo.save(data);
		}
		catch(Exception e) {
			throw new Exception(e);
		}
		
	}

	public List<CreditCustomer> list() {
		
		return creditCustomerRepo.findAll();
	}
}
