package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.HomePage;
import cucumber.api.java.en.Then;

public class Home extends BasePage{
	
	HomePage Home = new HomePage(driver);
	
	@Then("^Check Topmenu (.+)$")
    public void check_topmenu(String username) throws Throwable {
		Home.Menu(username);
	}
	
	@Then("^SearchOption$")
	public void SearchOption() throws IOException, InterruptedException {
		Home.Search();
	}
	@Then("^Check products$")
	public void Check_products() throws Throwable {
		Home.Home();
	}
	
	@Then("^Listview$")
	public void Listview() throws IOException, InterruptedException {
		Home.List();
	}

}
