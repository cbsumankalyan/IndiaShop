package stepDefinitions;

import POM.BasePage;
import POM.HomePage;
import POM.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login extends BasePage {
	
	LoginPage Login = new LoginPage(driver);
	HomePage Home = new HomePage(driver);
	
	@Given("^Enter username and Password$")
	public void enter_username_and_password() throws Throwable {
		Login.LoginDistributor();
		Thread.sleep(10000);
	}
	
	@Then("^Check Login details and menu$")
    public void check_login_details_and_menu() throws Throwable {
		Home.Menu();
	}
}
