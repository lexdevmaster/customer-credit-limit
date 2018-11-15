package br.com.lexpontes.simple_credit_register.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.Repository;

import br.com.lexpontes.simple_credit_register.model.CreditCustomer;

public interface CreditCustomerRepo extends Repository<CreditCustomer, Long>{
	  @Transactional
	  CreditCustomer save(CreditCustomer account);
	  
	  List<CreditCustomer> findAll();
}
