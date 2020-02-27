package stepDefinitions;

import POM.BasePage;
import POM.ReviewPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Review extends BasePage {
	
	ReviewPage review = new ReviewPage(driver);
	
	@When("^Review Fields$")
	public void review_fields(){
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

}
