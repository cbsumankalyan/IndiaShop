package stepDefinitions;

import java.io.IOException;

import POM.BasePage;
import POM.HomePage;
import POM.LoginPage;
import cucumber.api.java.en.Given;

public class Login extends BasePage {
	
	LoginPage Login = new LoginPage(driver);
	HomePage Home = new HomePage(driver);
	
	@Given("^(.+) and (.+)$")
	public void and(String username, String password) throws InterruptedException, IOException{
		Login.Login(username, password);
	}
}
