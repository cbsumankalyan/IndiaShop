package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.CartPage;
import POM.CheckOutPage;
import POM.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CheckOut extends BasePage {
	
	HomePage Home = new HomePage(driver);
	CartPage Cart = new CartPage(driver);
	CheckOutPage checkout = new CheckOutPage(driver);
	
	
	@When("^Check Out Go Back$")
	public void check_out_go_back() throws IOException, InterruptedException{
		checkout.GoBack();
		Cart.checkcart();
	}
	
	@When("^Check Out$")
	public void check_out(String username) throws InterruptedException, IOException{
		Home.CommonMenu(username);
		checkout.checkout();
	}
	
	@Then("^Check Form Fields$")
	public void check_form_fields(){
		checkout.formdetails();
	}
}
