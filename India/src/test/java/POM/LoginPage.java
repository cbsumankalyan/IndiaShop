package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage  extends BasePage {
	
	@FindBy(xpath = "//div[contains(@onclick, 'gdpr')]")
	private WebElement CookieClose;
	
	@FindBy(xpath = "(//button[contains(@ng-click,'flagDropdown')])[1]")
	private WebElement Country;
	
	@FindBy(xpath = "//translate[text()='India']")
	private WebElement CountrySelect;
		
	@FindBy(xpath = "//div[@class='modal-content']//input[@id='username']")
	private WebElement Username;
	
	@FindBy(xpath = "//div[@class='modal-content']//input[@id='password']")
	private WebElement Password;
	
	@FindBy(xpath = "//div[@class='modal-content']//button[@type='submit']")
	private WebElement UserLogin;
	
	public LoginPage(WebDriver driver){
		PageFactory.initElements(driver, this);
	}
	
	public void LoginDistributor(String username, String password){
		CookieClose.click();
		Country.click();
		CountrySelect.click();
		Username.sendKeys(username);
		Password.sendKeys(password);
		UserLogin.click();
	}
}
