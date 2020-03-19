package stepDefinitions;

import POM.BasePage;
import POM.CCAvenuePage;
import POM.ReviewPage;
import cucumber.api.java.en.Then;

public class CCAvenue extends BasePage {
	
	CCAvenuePage payment = new CCAvenuePage(driver);
	ReviewPage review = new ReviewPage(driver);
	
	@Then("^CCAvenue Payment Details$")
	public void ccavenue_payment_details() throws InterruptedException{
		review.Orders();
		payment.ccavenue();
	}

}
