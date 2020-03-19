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
	
	@When("^Added Retail Product to Cart$")
	public void added_retail_product_to_cart() throws InterruptedException{
		cartpage.cart();
	}
	
	@When("^Product Added to Cart (.+)$")
	public void  product_added_to_cart(String username) throws InterruptedException, IOException {
		cartpage.cart();
		Home.CommonMenu(username);
	}
	
	@Then("^Check the Cart Details$")
	public void check_the_cart_details() throws InterruptedException, IOException {
		cartpage.cartdetails();
	}
	
	@Then("^Check the Retail Cart Details$")
	public void check_the_retail_cart_details() throws InterruptedException, IOException {
		cartpage.retailcartdetails();
	}
	
	@When("^Remove Products from Cart$")
	public void remove_products_from_cart() throws InterruptedException {
		cartpage.removeproduct();
	}
	
	@When("^Remove Retail Products from Cart$")
	public void remove_retail_products_from_cart() throws InterruptedException {
		cartpage.removeretailproduct();
	}
	
	@Then("^Add Retail Products To Cart$")
	public void add_retail_products_to_cart() throws InterruptedException, IOException {
		cartpage.addretailproduct();
	}
	
	@Then("^Add Products To Cart (.+)$")
	public void add_products_to_cart(String username) throws InterruptedException, IOException {
		Home.CommonMenu(username);
		cartpage.addproduct();
	}
	
	@Then("^Check Product$")
	public void check_product() throws InterruptedException, IOException {
		cartpage.checkproduct();
	}
	
	@Then("^Check Retail Product$")
	public void check_retail_product() throws InterruptedException, IOException {
		cartpage.checkretailproduct();
	}
	
	@Then("^Check Cart$")
	public void check_cart() throws IOException, InterruptedException {
		cartpage.checkcart();
	}
	
	@Then("^Check Retail Cart$")
	public void check_retail_cart() throws IOException, InterruptedException {
		cartpage.checkretailcart();
	}
	
	@Then("^Sign Up Retail Customer$")
	public void sign_up_retail_customer() throws InterruptedException, IOException{
		cartpage.signupretail();
		cartpage.checkretailcart();
	}
	
	
}
