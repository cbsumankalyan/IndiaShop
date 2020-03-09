package stepDefinitions;

import POM.BasePage;
import POM.CCAvenuePage;
import cucumber.api.java.en.Then;

public class CCAvenue extends BasePage {
	
	CCAvenuePage payment = new CCAvenuePage(driver);
	
	@Then("^CCAvenue Payment Details$")
	public void ccavenue_payment_details() throws InterruptedException{
		payment.ccavenue();
	}

}
