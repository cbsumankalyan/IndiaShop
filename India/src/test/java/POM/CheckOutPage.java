package POM;

import java.util.List;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.junit.Assert;

public class CheckOutPage extends BasePage {
	
	@FindBy(xpath = "//a[@ng-click= 'orderInfo.prevPage()']")
	private WebElement GoBack;
	
	@FindBy(xpath = "//span[@ng-show='!orderInfo.isArEditMode']")
	private WebElement CheckOut;
	
	@FindBy(xpath = "//div[contains(@class, 'personal-info')]/h6")
	private WebElement PersonalInformation;
	
	@FindBy(xpath = "//h6[contains(@class, 'shipping')]")
	private WebElement ShippingInformation;
	
	@FindBy(xpath = "//form[@id='paymentInfo']/h6")
	private WebElement BillingInformation;
	
	@FindBys(@FindBy(xpath = "//span[@class='subheaders']"))
	private List<WebElement> FormFields;
	
	@FindBy(id = "shippingStreet1")
	private WebElement address1;
	
	@FindBy(id = "shippingStreet2")
	private WebElement address2;
	
	@FindBy(id = "shippingCity")
	private WebElement City;
	
	@FindBy(id = "shippingZip")
	private WebElement Zip;
	
	@FindBy(xpath = "//button[@ng-click='orderInfo.nextPage()']")
	private WebElement Continue;
	
	public CheckOutPage(WebDriver driver){
		PageFactory.initElements(driver, this);
	}
	
	public void GoBack(){
		GoBack.click();
	}
	
	public void checkout(){
		Assert.assertTrue(GoBack.isDisplayed());
		Assert.assertEquals(CheckOut.getText(), "CHECKOUT");
		Assert.assertEquals(PersonalInformation.getText(), "PERSONAL INFORMATION");
		Assert.assertEquals(ShippingInformation.getText(), "SHIPPING INFORMATION");
		Assert.assertEquals(BillingInformation.getText(), "BILLING INFORMATION");
	}
	
	public void formdetails(){
		
		String [] fields = {
				"FIRST NAME",
				"LAST NAME",
				"PHONE",
				"EMAIL",
				"",
				"STREET 1",
				"STREET 2",
				"CITY",
				"STATE/PROVINCE",
				"ZIPCODE",
				"COUNTRY",
				"FIRST NAME",
				"LAST NAME",
				"STREET 1",
				"STREET 2",
				"CITY",
				"STATE/PROVINCE",
				"ZIPCODE",
				"COUNTRY",
				};
		
		for(int i = 0; i<FormFields.size(); i++){
			Assert.assertEquals(FormFields.get(i).getText(), fields[i]);
		}
		
		Continue.click();
	}
	
	public void retailformdetails(){
		
		String [] fields = {
				"FIRST NAME",
				"LAST NAME",
				"PHONE",
				"EMAIL",
				"",
				"STREET 1",
				"STREET 2",
				"CITY",
				"STATE/PROVINCE",
				"ZIPCODE",
				"COUNTRY",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				};
		
		for(int i = 0; i<FormFields.size(); i++){
			Assert.assertEquals(FormFields.get(i).getText(), fields[i]);
		}
		
		address1.sendKeys("23/2 2nd floor Khandari Parc");
		address1.sendKeys("Haudin Road");
		City.sendKeys("Banglaore");
		Zip.sendKeys("560042");
		
		Continue.click();
	}
	
	
}
