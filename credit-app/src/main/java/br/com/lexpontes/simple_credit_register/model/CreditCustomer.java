package br.com.lexpontes.simple_credit_register.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "credit_customer")
public class CreditCustomer {
	@Id
	int 	idCreditCustomer;
	
	String 	customerName;
	Double 	creditLimitValue;
	String 	creditRiskRating;
	Double 	interestRating;
	
	public int getIdCreditCustomer() {
		return idCreditCustomer;
	}
	public void setIdCreditCustomer(int idCreditCustomer) {
		this.idCreditCustomer = idCreditCustomer;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public Double getCreditLimitValue() {
		return creditLimitValue;
	}
	public void setCreditLimitValue(Double creditLimitValue) {
		this.creditLimitValue = creditLimitValue;
	}
	public String getCreditRiskRating() {
		return creditRiskRating;
	}
	public void setCreditRiskRating(String creditRiskRating) {
		this.creditRiskRating = creditRiskRating;
	}
	public Double getInterestRating() {
		return interestRating;
	}
	public void setInterestRating(Double interestRating) {
		this.interestRating = interestRating;
	}
}
