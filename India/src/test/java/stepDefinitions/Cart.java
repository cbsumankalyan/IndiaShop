package stepDefinitions;

import POM.BasePage;
import POM.CartPage;
import cucumber.api.java.en.Then;

public class Cart extends BasePage{
	
	CartPage cartpage = new CartPage(driver);
	
	@Then("^AddProductsToCart CalciumMagnesium$")
	public void  AddProductsToCart_CalciumMagnesium() {
		cartpage.cart();
	}
	
}
