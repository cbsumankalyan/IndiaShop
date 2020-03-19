package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.CheckOutPage;
import POM.HomePage;
import POM.PaymentPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Payment extends BasePage {

	HomePage Home = new HomePage(driver);
	PaymentPage payment = new PaymentPage(driver);
	CheckOutPage checkout = new CheckOutPage(driver);
	
	@When("^Payment Go Back$")
	public void payment_go_back() throws InterruptedException{
		payment.GoBack();
		checkout.checkout();
		checkout.formdetails();
	}
	
	@When("^Payment Fields (.+)$")
	public void payment_fields(String username) throws InterruptedException, IOException{
		Home.CommonMenu(username);
		payment.paymentfields();
	}
	
	@When("^Retail Payment Fields$")
	public void payment_fields() throws InterruptedException, IOException{
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
	
	@Then("^Retail Order Summary$")
	public void retail_order_summary() throws InterruptedException{
		payment.retailsummary();
	}
	
	@Then("^Payment Essecom$")
	public void payment_essecom() throws InterruptedException{
		payment.Essecom();
	}
	
	@Then("^Payment Avenue$")
	public void payment_avenue() throws InterruptedException{
		payment.CCAvenue();
	}
}
