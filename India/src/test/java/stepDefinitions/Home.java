package stepDefinitions;

import POM.BasePage;
import POM.HomePage;
import cucumber.api.java.en.Then;

public class Home extends BasePage{
	
	@Then("^Check products$")
	public void Check_products() throws Throwable {
		HomePage Home = new HomePage(driver);
		Home.Home();
	}

}
