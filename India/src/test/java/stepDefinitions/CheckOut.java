package stepDefinitions;

import POM.BasePage;
import POM.CheckOutPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CheckOut extends BasePage {
	
	CheckOutPage checkout = new CheckOutPage(driver);

	@When("^Check Out$")
	public void check_out(){
		checkout.checkout();
	}
	
	@Then("^Check Form Fields$")
	public void check_form_fields(){
		checkout.formdetails();
	}
}
