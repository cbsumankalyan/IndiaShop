package stepDefinitions;

import POM.CartPage;
import cucumber.api.java.en.Then;

public class Cart {
	
	CartPage Cart = new CartPage();
	
	@Then("^AddProductsToCart$")
	public void  AddProductsToCart() {
		Cart.cart();
	}
}
