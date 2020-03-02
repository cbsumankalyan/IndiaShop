package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.CartPage;
import POM.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cart extends BasePage{
	
	HomePage Home = new HomePage(driver);
	CartPage cartpage = new CartPage(driver);
	
	@When("^Product Added to Cart$")
	public void  product_added_to_cart() throws InterruptedException, IOException {
		cartpage.cart();
		Home.CommonMenu();
	}
	
	@Then("^Check the Cart Details$")
	public void check_the_cart_details() throws InterruptedException, IOException {
		cartpage.cartdetails();
	}
	
	@When("^Remove Products from Cart$")
	public void remove_products_from_cart() throws InterruptedException {
		cartpage.removeproduct();
	}
	
	@Then("^Add Products To Cart$")
	public void add_products_to_cart() throws InterruptedException, IOException {
		Home.CommonMenu();
		cartpage.addproduct();
	}
	
	@Then("^Check Product$")
	public void check_product() throws InterruptedException, IOException {
		cartpage.checkproduct();
	}
	
	@Then("^Check Cart$")
	public void check_cart() throws IOException, InterruptedException {
		cartpage.checkcart();
	}
	
}
