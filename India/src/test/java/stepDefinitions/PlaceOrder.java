package stepDefinitions;

import POM.BasePage;
import POM.HomePage;
import POM.PlaceOrderPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PlaceOrder extends BasePage {
	
	HomePage Home = new HomePage(driver);
	PlaceOrderPage placeorder = new PlaceOrderPage(driver);
	
	@When("^Placed Order Fields$")
	public void placed_order_fields() throws InterruptedException{
		Home.CommonMenu();
		placeorder.PlaceOrderFields();
	}
	
	@Then("^Placed Shipping Information$")
	public void placed_shipping_information(){
		placeorder.shipping();
	}
	
	@Then("^Placed Contact Information$")
	public void placed_contact_information(){
		placeorder.contact();
	}
	
	@Then("^Placed Payment Information$")
	public void placed_payment_information(){
		placeorder.payment();
	}
	
	@Then("^Placed Orders$")
	public void placed() throws InterruptedException{
		placeorder.Orders();
	}
	
	@When("^Return Home$")
	public void return_home() throws InterruptedException{
		placeorder.ReturnHome();
		Thread.sleep(5000);
		Home.CommonMenu();
		Home.Menu();
	}
}
