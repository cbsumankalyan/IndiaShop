package POM;

import java.io.IOException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class LoginPage  extends BasePage {
	
	@FindBy(xpath = "//div[contains(@onclick, 'gdpr')]")
	private WebElement CookieClose;
	
	@FindBy(xpath = "(//button[contains(@ng-click,'flagDropdown')])[1]")
	private WebElement Country;
	
	@FindBy(xpath = "//translate[text()='India']")
	private WebElement CountrySelect;
	
	@FindBy(xpath = "//select[@ng-model='app.selectedProvince']")
	private WebElement StateSelect;
	
	@FindBy(xpath = "//a[@data-dismiss='modal']")
	private WebElement OKState;
	
	@FindBy(xpath = "//a[@class='login-link']")
	private WebElement LoginClick;
		
	@FindBy(id = "username")
	private WebElement Username;
	
	@FindBy(id = "password")
	private WebElement Password;
	
	@FindBy(xpath = "//button[@type='submit']")
	private WebElement UserLogin;
	
	public LoginPage(WebDriver driver){
		PageFactory.initElements(driver, this);
	}
	
	public void SelectState() throws InterruptedException{
		Thread.sleep(10000);
		CookieClose.click();
		Country.click();
		CountrySelect.click();
		Select select = new Select(StateSelect);
		select.selectByVisibleText("Karnataka");
	}
	
	public void Login(String username, String password) throws InterruptedException, IOException{
		Thread.sleep(3000);
		CookieClose.click();
		Country.click();
		CountrySelect.click();
		Select select = new Select(StateSelect);
		select.selectByVisibleText(getTranslation(username));
		if (getTranslation(username).equals("Andaman and Nicobar Islands")){
			OKState.click();
		}
		
		Thread.sleep(10000);
		LoginClick.click();
		Username.sendKeys(username);
		Password.sendKeys(password);
		UserLogin.click();
		userdata.put("id", username);
	}
}
