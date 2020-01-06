package POM;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import junit.framework.Assert;

public class Home extends Base {

	@FindBy(xpath = "//translate[text()= 'All Products']")
	private WebElement ALLProducts;

	@FindBys(@FindBy(xpath = "//a[@class='name-text uppercase ng-binding']"))
	List<WebElement> Products;

	@FindBys(@FindBy(xpath = "//span[@ng-show='p.terms.taxInclusive']"))
	List<WebElement> ProductPrices;

	@FindBys(@FindBy(xpath = "//div[contains(@class, 'item-number')]"))
	List<WebElement> ProductItemCode;

	@FindBys(@FindBy(xpath = "//div[contains(@class, 'pv-amount')]"))
	List<WebElement> ProductPV;

	@FindBy(xpath = "//div[contains(@class, 'message')]")
	private WebElement CurrentState;

	public Home(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void HomePage() throws InterruptedException, IOException {
		Thread.sleep(5000);

		Assert.assertEquals(CurrentState.getText(), "You are currently viewing product in Karnataka");
		ALLProducts.click();

		String[] products = { "BIOS LIFE AIR FILTER", "BLENDER BOTTLE W/AGITATOR", "CALCIUM MAGNESIUM COMPLEX",
				"CAP REVOLUTION GREEN IND", "CATALOGUE KIT INDIA", "KIDDO SACHETS 16", "LEAN COMPLETE VANILLA 25 IND",
				"NATURE'S TEA", "NEIGENE BAG", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS", "PIN UNICITY LAPEL IN",
				"REVOLUTION GREEN PACK", "SUPER CHLOROPHYLL PACK", "T-SHIRT MATCHA LAUNCH SMALL",
				"T-SHIRT REVOLUTION GREEN MED IND", "T-SHIRT REVOLUTION GREEN XL IND", "UNICITY ACTIVATE (INDIA)",
				"UNICITY BALANCE 30", "UNICITY BIO REISHI S COFFEE", "UNICITY BIOS LIFE SLIM",
				"UNICITY CLEAR START KIT", "UNICITY FAMILY PACK", "UNICITY LIFIBER 28 IN", "UNICITY PREMIUM MATCHA IN",
				"UNICITY PREMIUM SUPER CHLOROPHYLL IN", };

		FileReader type = new FileReader("E:/ShoppingCart/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);

		for (int i = 0; i < products.length; i++) {
			Assert.assertEquals(Products.get(i).getText(), products[i]);
			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());
			System.out.println(p.getProperty(Products.get(i).getText().replace(" ", "") + "CODE"));
			System.out.println(ProductItemCode.get(i).getText());
			
			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PRICE"),
					ProductPrices.get(i).getText());
			System.out.println(p.getProperty(Products.get(i).getText().replace(" ", "") + "PRICE"));
			System.out.println(ProductPrices.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PV"),
					ProductPV.get(i).getText().replace("PV: ", ""));
			System.out.println(p.getProperty(Products.get(i).getText().replace(" ", "") + "PV"));
			System.out.println(ProductPV.get(i).getText());
		}
	}

}
