package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import POM.BasePage;

public class CCAvenuePage extends BasePage {
	
	@FindBy(id = "creditCardNumber")
	private WebElement CCNumber;
	
	@FindBy(xpath = "//select[@id='expiryMonthCreditCard']") 
	private WebElement CCMonth;
	
	@FindBy(id = "expiryYearCreditCard") 
	private WebElement CCYear;
	
	@FindBy(id = "CVVNumberCreditCard")
	private WebElement CVV;
	
	@FindBy(id = "SubmitBillShip")
	private WebElement MakePayment;
	
	public CCAvenuePage(WebDriver driver){
		PageFactory.initElements(driver, this);
	}
	
	public void ccavenue() throws InterruptedException {
		Thread.sleep(5000);
		Assert.assertEquals("https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction", driver.getCurrentUrl());
		CCNumber.sendKeys("4111111111111111");
		Select select = new Select(CCMonth);
		select.selectByVisibleText("Dec (12)");
		CCYear.sendKeys("2021");
		CVV.sendKeys("123");
		MakePayment.click();
		Assert.assertEquals("https://secure.ccavenue.com/transaction.do?command=retryTransaction", driver.getCurrentUrl());
	}
	
	

}
