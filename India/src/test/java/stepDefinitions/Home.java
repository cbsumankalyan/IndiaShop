package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Home extends BasePage{
	
	HomePage Home = new HomePage(driver);
	
	@Then("^Home Page (.+)")
	public void homepage(String username) throws InterruptedException, IOException{
		Home.CommonMenu(username);
		Home.Menu(username);
	}
	
	
	@Then("^All Products$")
	public void all_producst() throws InterruptedException, IOException {
		Home.AllProducts();
	}
	
	@Then("^Products$")
	public void products() throws IOException, InterruptedException {
		Home.Products();
	}
	
	@Then("^Accessories$")
	public void accessories() throws IOException, InterruptedException {
		Home.Accessories();
	}
	
	@When("^Search Product$")
	public void search_product() throws IOException, InterruptedException {
		Home.Search();
	}
	
	@Then("^All Products in List View$")
	public void all_products_in_list_view() throws IOException, InterruptedException {
		Home.ALLProductsList();
	}
	
	@Then("^Products in List View$")
	public void products_in_list_view() throws IOException, InterruptedException {
		Home.ProductsList();
	}
	
	@Then("^Accessories in List View")
	public void accessories_in_list_view() throws IOException, InterruptedException {
		Home.AccessoriesList();
	}
	
	@When("^Logout$")
	public void logout(){
		Home.Logout();
	}

}
