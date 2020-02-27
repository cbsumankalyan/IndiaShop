package stepDefinitions;

import POM.BasePage;
import POM.PaymentPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Payment extends BasePage {

	PaymentPage payment = new PaymentPage(driver);
	
	@When("^Payment Fields$")
	public void payment_fields(){
		payment.paymentfields();
	}
	
	@When("^Banks Names$")
	public void banks_names(){
		payment.paymentbanks();
	}
	
	@Then("^Order Summary$")
	public void order_summary() throws InterruptedException{
		payment.summary();
	}
}
