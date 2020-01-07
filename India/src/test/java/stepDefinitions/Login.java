package stepDefinitions;

import POM.BasePage;
import POM.LoginPage;
import cucumber.api.java.en.When;

public class Login extends BasePage{
	
	@When("^user enters (.+) and (.+) to login$")
	public void user_enters_and_to_login(String username, String password) throws Throwable {
		LoginPage Login = new LoginPage(driver);
		Login.LoginDistributor(username, password);
		Thread.sleep(10000);
	}	
}
