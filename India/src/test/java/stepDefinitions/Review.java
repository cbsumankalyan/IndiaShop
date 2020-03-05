package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.HomePage;
import POM.PaymentPage;
import POM.ReviewPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Review extends BasePage {
	
	HomePage Home = new HomePage(driver);
	PaymentPage payment = new PaymentPage(driver);
	ReviewPage review = new ReviewPage(driver);
	
	@When("^Review Fields$")
	public void review_fields(String username) throws InterruptedException, IOException{
		Home.CommonMenu(username);
		review.review();
	}
	
	@Then("^Shipping Information$")
	public void shipping_information(){
		review.shipping();
	}
	
	@Then("^Contact Information$")
	public void contact_information(){
		review.contact();
	}
	
	@Then("^Payment Information$")
	public void payment_information(){
		review.payment();
	}
	
	@Then("^Review Orders$")
	public void review_orders() throws InterruptedException{
		review.Orders();
	}
	
	@When("^Update Shipping$")
	public void update_shipping() throws InterruptedException{
		review.updateshipping();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
		review.updateshippingaddress();
	}
	
	@When("^Update Contact$")
	public void update_contact() throws InterruptedException{
		review.updatecontact();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
		review.updatecontactdetails();
	}
	
	@When("^Update Payment$")
	public void update_payment() throws InterruptedException{
		review.updatepayment();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
	}
	
	@When("^Go Back$")
	public void go_back() throws InterruptedException{
		review.goback();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
	}

}
