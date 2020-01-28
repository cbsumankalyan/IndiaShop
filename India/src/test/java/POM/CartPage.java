package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage extends BasePage {
	
	@FindBy(xpath = "//a[@ng-show='app.isShopping'][contains(.,'Magnesium')]//following::button[@title= 'Add to Cart']")
	private WebElement CalciumMagnesium;
	
	public CartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void cart() {
		CalciumMagnesium.click();
	}
}
