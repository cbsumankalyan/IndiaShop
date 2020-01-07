package stepDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import POM.BasePage;
import cucumber.api.java.en.Given;


public class stepDefinition extends BasePage {

	@Given("^Open the browser$")
	public void Open_the_browser() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver_win32_2.36/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Given("^Navigate to the \"([^\"]*)\" application$")
	public void navigate_to_the_application(String arg1) throws Throwable {
		driver.get(arg1);
		Thread.sleep(10000);
	}

	

}
