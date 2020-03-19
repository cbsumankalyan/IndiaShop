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
	
	@When("^Review Fields (.+)$")
	public void review_fields(String username) throws InterruptedException, IOException{
		Home.CommonMenu(username);
		review.review();
	}
	
	@When("^Retail Review Fields$")
	public void retail_review_fields() throws InterruptedException, IOException{
		review.review();
	}
	
	@Then("^Shipping Information (.+)$")
	public void shipping_information(String username) throws IOException{
		review.shipping(username);
	}
	
	@Then("^Retail Shipping Information$")
	public void retail_shipping_information(){
		review.retailshipping();
	}
	
	@Then("^Contact Information (.+)$")
	public void contact_information(String username) throws IOException{
		review.contact(username);
	}
	
	@Then("^Retail Contact Information$")
	public void retail_contact_information(){
		review.retailcontact();
	}
	
	@Then("^Payment Information$")
	public void payment_information(){
		review.payment();
	}
	
	@Then("^Payment Information CCAvenue$")
	public void payment_information_ccavenue(){
		review.ccavenue();
	}
	
	@Then("^Review Orders$")
	public void review_orders() throws InterruptedException{
		review.Orders();
	}
	
	@Then("^Retail Review Orders$")
	public void retail_review_orders() throws InterruptedException{
		review.RetailOrders();
	}
	
	@When("^Update Shipping$")
	public void update_shipping() throws InterruptedException{
		review.updateshipping();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
		review.updateshippingaddress();
	}
	
	@When("^Retail Update Shipping$")
	public void retail_update_shipping() throws InterruptedException{
		review.updateshipping();
		payment.paymentfields();
		payment.paymentbanks();
		payment.retailsummary();
		review.updateretailshippingaddress();
	}
	
	@When("^Update Contact$")
	public void update_contact() throws InterruptedException{
		review.updatecontact();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
		review.updatecontactdetails();
	}
	
	@When("^Retail Update Contact$")
	public void retail_update_contact() throws InterruptedException{
		review.updatecontact();
		payment.paymentfields();
		payment.paymentbanks();
		payment.retailsummary();
		review.updatecontactdetails();
	}
	
	@When("^Update Payment$")
	public void update_payment() throws InterruptedException{
		review.updatepayment();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
	}
	
	@When("^Retail Update Payment$")
	public void retail_update_payment() throws InterruptedException{
		review.updatepayment();
		payment.paymentfields();
		payment.paymentbanks();
		payment.retailsummary();
	}
	
	@When("^Go Back$")
	public void go_back() throws InterruptedException{
		review.goback();
		payment.paymentfields();
		payment.paymentbanks();
		payment.summary();
	}
	
	@When("^Retail Go Back$")
	public void retail_go_back() throws InterruptedException{
		review.goback();
		payment.paymentfields();
		payment.paymentbanks();
		payment.retailsummary();
	}

}
