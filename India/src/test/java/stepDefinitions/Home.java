package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.HomePage;
import POM.LoginPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Home extends BasePage{
	
	HomePage Home = new HomePage(driver);
	LoginPage Login = new LoginPage(driver);
	
	@Then("^Select State$")
	public void select_state() throws InterruptedException{
		Login.SelectState();
	}
	
	@Then("^Retail Home Page$")
	public void retail_home_page() throws InterruptedException{
		Home.RetailMenu();
	}
	
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
	
	@Then("^Retail All Products$")
	public void retail_all_producst() throws InterruptedException, IOException {
		Home.RetailAllProducts();
	}
	
	@Then("^Retail Products$")
	public void retail_products() throws IOException, InterruptedException {
		Home.RetailProducts();
	}
	
	@Then("^Retail Accessories$")
	public void retail_accessories() throws IOException, InterruptedException {
		Home.RetailAccessories();
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
	
	@Then("^Retail All Products in List View$")
	public void reatil_all_products_in_list_view() throws IOException, InterruptedException {
		Home.RetailALLProductsList();
	}
	
	@Then("^Retail Products in List View$")
	public void retail_products_in_list_view() throws IOException, InterruptedException {
		Home.RetailProductsList();
	}
	
	@Then("^Retail Accessories in List View")
	public void retail_accessories_in_list_view() throws IOException, InterruptedException {
		Home.RetailAccessoriesList();
	}
	
	@When("^Logout$")
	public void logout(){
		Home.Logout();
	}

}
