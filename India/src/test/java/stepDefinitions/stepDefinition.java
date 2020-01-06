package stepDefinitions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import POM.Base;
import POM.Home;
import POM.Login;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition extends Base {
	
	@Before
	public void Setup() throws IOException{
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver_win32_2.36/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@After
	public void tearDown(){
		System.out.println("Browser Closed");
	}

	@Given("^Navigate to the \"([^\"]*)\" application$")
	public void navigate_to_the_application(String arg1) throws Throwable {
		driver.get(arg1);
		Thread.sleep(10000);
	}

	@When("^user enters (.+) and (.+) to login$")
	public void user_enters_and_to_login(String username, String password) throws Throwable {
		Login Login = new Login(driver);
		Login.LoginDistributor(username, password);
		Thread.sleep(10000);
	}

	@Then("^Check products$")
	public void Suman() throws Throwable {
		Home Home = new Home(driver);
		Home.HomePage();
	}
	
}
