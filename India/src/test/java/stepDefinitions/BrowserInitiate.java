package stepDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import POM.BasePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BrowserInitiate extends BasePage {
	
	@Before
	public void Open_the_browser() {
	
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Given("^Navigate to the \"([^\"]*)\" application$")
	public void navigate_to_the_application(String arg1) throws Throwable {
		driver.get(arg1);
		Thread.sleep(10000);
	}
	
	@After
	public void tearDown(Scenario scenario){
		
		if (scenario.isFailed()) {
		      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		      scenario.embed(screenshot, "image/png"); 
		      System.out.println("Scenerio Name - "+scenario.getName());
		 }
		driver.close();
	}
	

	
	
	
}
