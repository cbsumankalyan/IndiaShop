package POM;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import junit.framework.Assert;

public class HomePage extends BasePage {

	@FindBy(xpath = "//div[contains(@title, 'Grid')]")
	private WebElement Grid;

	@FindBy(xpath = "//div[contains(@title, 'List')]")
	private WebElement List;

	@FindBy(xpath = "//translate[text()= 'All Products']")
	private WebElement ALLProducts;

	@FindBy(xpath = "//a[@href='#/home/Products']")
	private WebElement ProductsOnly;

	@FindBy(xpath = "//a[@href='#/home/Accessories']")
	private WebElement Accessories;

	@FindBys(@FindBy(xpath = "//a[@class='name-text uppercase ng-binding']"))
	List<WebElement> Products;

	@FindBys(@FindBy(xpath = "//span[@ng-show='p.terms.taxInclusive']"))
	List<WebElement> ProductPrices;

	@FindBys(@FindBy(xpath = "//div[contains(@class, 'item-number')]"))
	List<WebElement> ProductItemCode;

	@FindBys(@FindBy(xpath = "//div[contains(@class, 'pv-amount')]"))
	List<WebElement> ProductPV;

	@FindBys(@FindBy(xpath = "//select[@ng-model='p.qty']//option"))
	List<WebElement> ProductQty;

	@FindBys(@FindBy(xpath = "//button[@title='Add to Cart']"))
	List<WebElement> ProductAddtoCart;

	@FindBy(xpath = "//h2")
	private WebElement ProductName;

	@FindBy(xpath = "//div[@class='price']//span[@class='ng-binding']")
	private WebElement ProductPrice;

	@FindBy(xpath = "//span[contains(@class,'item-number')]")
	private WebElement ProductItemNumber;

	@FindBy(xpath = "//div[@class='price']//span[contains(@class,'pv')]")
	private WebElement Productpv;

	@FindBy(xpath = "//button[contains(@class, 'share')]")
	private WebElement ShareLink;

	@FindBy(xpath = "//div[contains(@class, 'description ')]")
	private WebElement ProductDescription;

	@FindBy(xpath = "//span[@class='icon-arrow']")
	private WebElement Back;

	@FindBy(xpath = "//div[contains(@class, 'message')]")
	private WebElement CurrentState;

	@FindBys(@FindBy(xpath = "//div[contains(@class, 'dont-')]//select[contains(@ng-model, 'selectedLanguage')]//option"))
	List<WebElement> Languages;

	@FindBy(xpath = "//translate[text()='Country']")
	private WebElement Country;

	@FindBy(xpath = "//span[contains(text(),'india')]")
	private WebElement SelectedCountry;
	
	@FindBy(xpath = "//span[contains(@class, 'pv-align')]")
	private WebElement CartPV;
	
	@FindBy(xpath = "//span[contains(@class, 'total-text')]")
	private WebElement CartPrice;
	
	@FindBy(xpath = "//span[contains(@class, 'qty-icon')]")
	private WebElement CartQty;

	@FindBy(xpath = "//span[contains(@class, 'my-unicity')]")
	private WebElement MyUnicity;

	@FindBy(xpath = "//a[contains(text(),'Unicity.com')]")
	private WebElement Unicitydotcom;

	@FindBy(xpath = "//translate[contains(text(),'Office')]")
	private WebElement Officedotcom;

	@FindBy(xpath = "//translate[contains(text(),'Library')]")
	private WebElement Library;

	@FindBy(xpath = "(//div[contains(@class,'customer-id')])[1]")
	private WebElement DistributorName;

	@FindBy(xpath = "(//div[contains(@class,'customer-id')])[2]")
	private WebElement DistributorID;
	
	@FindBy(xpath = "//span[@class= 'search']")
	private WebElement Search;
	
	@FindBy(xpath = "//input[contains(@ng-model, 'searchFilter')]")
	private WebElement SearchProduct;
	
	@FindBy(xpath = "//div[@class= 'name']//a[contains(@href, '#/product-info')]")
	private WebElement Name;
	
	@FindBy(xpath = "//span[@ng-show='p.terms.taxInclusive']")
	private WebElement Price;
	
	@FindBy(xpath = "//div[contains(@class, 'item-number')]")
	private WebElement ItemCode;

	@FindBy(xpath = "//div[contains(@class, 'pv-amount')]")
	private WebElement PV;
	
	@FindBy(xpath = "//button[@title='Add to Cart']")
	private WebElement AddtoCart;
	
	@FindBy(xpath = "//a[@class='name-text uppercase ng-binding']")
	private WebElement SearchProductClick;
	
	@FindBys(@FindBy(xpath = "//select[contains(@ng-show, 'data.qty')]//option"))
	List <WebElement> SingleProductQty;
	
	@FindBy(xpath = "//button[@title='Add to Cart']")
	private WebElement SingleAddtoCart;
	
	@FindBy(xpath = "//span[contains(@class, 'icon-cart')]")
	private WebElement Cart;
	
	@FindBy(xpath="//div[contains(@title,'in a List')]")
	private WebElement ListView;
	
	@FindBys(@FindBy(xpath="//a[contains(@class, 'name-word')]"))
	List <WebElement> ListViewProductName;
	
	@FindBys(@FindBy(xpath="//div[contains(@class, 'pv-grid')]"))
	List<WebElement> ListViewProductPV;
	
	@FindBys(@FindBy(xpath="//span[contains(@class, 'icon-minus')]"))
	List<WebElement> ListViewMinus;
	
	@FindBys(@FindBy(xpath="//input[@ng-model='p.listQty']"))
	List<WebElement> ListViewQty;
	
	@FindBys(@FindBy(xpath="//span[contains(@class, 'icon-plus')]"))
	List<WebElement> ListViewPlus;
	

	public HomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void Menu(String username) throws InterruptedException {

		String[] languages = { "EN", "HI", };
		for (int i = 0; i < languages.length; i++) {
			Assert.assertEquals(languages[i], Languages.get(i).getText());
		}
		Thread.sleep(3000);
		Country.click();
		Assert.assertEquals(SelectedCountry.getText(), "India");
		
		Assert.assertEquals(CartPV.getText(), "PV: 0");
		Assert.assertEquals(CartPrice.getText(), "₹0.00");
		Assert.assertEquals(CartQty.getText(), "0");
		
		MyUnicity.click();

		Assert.assertTrue(Unicitydotcom.isDisplayed());
		Assert.assertTrue(Officedotcom.isDisplayed());
		Assert.assertTrue(Library.isDisplayed());

		Assert.assertEquals(DistributorName.getText(), "INDIA TRAINING");
		Assert.assertEquals(DistributorID.getText(), "#" + username);
		
		

	}
	
	public void Search() throws IOException, InterruptedException {
		
		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);
		
		Search.click();
		SearchProduct.sendKeys("Family");
		
		Assert.assertEquals("UNICITY FAMILY PACK", Name.getText());
		Assert.assertEquals(p.getProperty(Name.getText().replace(" ", "") + "CODE"), ItemCode.getText());
		Assert.assertEquals(p.getProperty(Name.getText().replace(" ", "") + "PRICE"), Price.getText());
		Assert.assertEquals(p.getProperty(Name.getText().replace(" ", "") + "PV"), PV.getText().replace("PV: ", ""));
		
		Assert.assertTrue(AddtoCart.isDisplayed());
		
		for (int j = 0; j < qty.length; j++) {
			Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
		}
		
		SearchProductClick.click();

		Assert.assertEquals("UNICITY FAMILY PACK", ProductName.getText());
		Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
				ProductItemNumber.getText());
		Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
				ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
		Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
				Productpv.getText().replace("PV: ", ""));
		Thread.sleep(5000);
		for (int j = 0; j < qty.length; j++) {
			Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
		}
		Assert.assertTrue(ShareLink.isDisplayed());
		Assert.assertTrue(SingleAddtoCart.isDisplayed());
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,250)", "");
		Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
		Back.click();
	}
	
	public void Home() throws InterruptedException, IOException {
		Thread.sleep(5000);

		Assert.assertEquals(CurrentState.getText(), "You are currently viewing product in Karnataka");
		ALLProducts.click();

		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);

		for (int i = 0; i < allproducts.length; i++) {
			Assert.assertEquals(Products.get(i).getText(), allproducts[i]);
			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PRICE"),
					ProductPrices.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PV"),
					ProductPV.get(i).getText().replace("PV: ", ""));

			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
			}

			Assert.assertTrue(ProductAddtoCart.get(i).isDisplayed());

			Products.get(i).click();

			Assert.assertEquals(allproducts[i], ProductName.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
					ProductItemNumber.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
					ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
					Productpv.getText().replace("PV: ", ""));
			Thread.sleep(5000);
			Assert.assertTrue(ShareLink.isDisplayed());
			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
			}
			Assert.assertTrue(SingleAddtoCart.isDisplayed());
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,250)", "");
			Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
			Back.click();
//			SingleAddtoCart.click();
//			Cart.click();
			
			
			
		}

		ProductsOnly.click();
	
		for (int i = 0; i < products.length; i++) {
			Assert.assertEquals(Products.get(i).getText(), products[i]);
			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PRICE"),
					ProductPrices.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PV"),
					ProductPV.get(i).getText().replace("PV: ", ""));

			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
			}

			Assert.assertTrue(ProductAddtoCart.get(i).isDisplayed());

			Products.get(i).click();

			Assert.assertEquals(products[i], ProductName.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
					ProductItemNumber.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
					ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
					Productpv.getText().replace("PV: ", ""));
			Thread.sleep(5000);
			Assert.assertTrue(ShareLink.isDisplayed());
			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
			}
			Assert.assertTrue(SingleAddtoCart.isDisplayed());
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,250)", "");
			Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
			Back.click();

		}

		Accessories.click();

		for (int i = 0; i < accessories.length; i++) {
			Assert.assertEquals(Products.get(i).getText(), accessories[i]);
			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PRICE"),
					ProductPrices.get(i).getText());

			Assert.assertEquals(p.getProperty(Products.get(i).getText().replace(" ", "") + "PV"),
					ProductPV.get(i).getText().replace("PV: ", ""));

			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
			}

			Assert.assertTrue(ProductAddtoCart.get(i).isDisplayed());

			Products.get(i).click();

			Assert.assertEquals(accessories[i], ProductName.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
					ProductItemNumber.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
					ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
					Productpv.getText().replace("PV: ", ""));
			Thread.sleep(5000);
			Assert.assertTrue(ShareLink.isDisplayed());
			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
			}
			Assert.assertTrue(SingleAddtoCart.isDisplayed());
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,250)", "");
			Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
			Back.click();
		}
	}

	public void List() throws IOException, InterruptedException {
		ListView.click();
		ALLProducts.click();
		
		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);
		Thread.sleep(2000);
		Assert.assertTrue(AddtoCart.isDisplayed());
		for (int i = 0; i < allproducts.length; i++) {
			Assert.assertEquals(ListViewProductName.get(i).getText(), allproducts[i]);
			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());
			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "PRICE"),
					"₹"+ProductPrices.get(i).getText().toUpperCase());

			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "PV"),
					ListViewProductPV.get(i).getText().replace("PV: ", ""));

			Assert.assertTrue(ListViewMinus.get(i).isDisplayed());
			Assert.assertTrue(ListViewQty.get(i).isDisplayed());
			Assert.assertTrue(ListViewPlus.get(i).isDisplayed());
			
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].scrollIntoView();", ListViewProductName.get(i));
			
			ListViewProductName.get(i).click();

			Assert.assertEquals(allproducts[i], ProductName.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
					ProductItemNumber.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
					ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
					Productpv.getText().replace("PV: ", ""));
			Thread.sleep(5000);
			Assert.assertTrue(ShareLink.isDisplayed());
			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
			}
			Assert.assertTrue(SingleAddtoCart.isDisplayed());
			jse.executeScript("window.scrollBy(0,250)", "");
			Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
			Back.click();
		}
		
		ProductsOnly.click();
		Assert.assertTrue(AddtoCart.isDisplayed());
		for (int i = 0; i < products.length; i++) {
			Assert.assertEquals(ListViewProductName.get(i).getText(), products[i]);
			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());
			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "PRICE"),
					"₹"+ProductPrices.get(i).getText().toUpperCase());

			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "PV"),
					ListViewProductPV.get(i).getText().replace("PV: ", ""));

			Assert.assertTrue(ListViewMinus.get(i).isDisplayed());
			Assert.assertTrue(ListViewQty.get(i).isDisplayed());
			Assert.assertTrue(ListViewPlus.get(i).isDisplayed());
			
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].scrollIntoView();", ListViewProductName.get(i));
			
			ListViewProductName.get(i).click();

			Assert.assertEquals(products[i], ProductName.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
					ProductItemNumber.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
					ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
					Productpv.getText().replace("PV: ", ""));
			Thread.sleep(5000);
			Assert.assertTrue(ShareLink.isDisplayed());
			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
			}
			Assert.assertTrue(SingleAddtoCart.isDisplayed());
			jse.executeScript("window.scrollBy(0,250)", "");
			Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
			Back.click();
		}
		
		Accessories.click();
		Assert.assertTrue(AddtoCart.isDisplayed());
		for (int i = 0; i < accessories.length; i++) {
			Assert.assertEquals(ListViewProductName.get(i).getText(), accessories[i]);
			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "CODE"),
					ProductItemCode.get(i).getText());
			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "PRICE"),
					"₹"+ProductPrices.get(i).getText().toUpperCase());

			Assert.assertEquals(p.getProperty(ListViewProductName.get(i).getText().replace(" ", "") + "PV"),
					ListViewProductPV.get(i).getText().replace("PV: ", ""));

			Assert.assertTrue(ListViewMinus.get(i).isDisplayed());
			Assert.assertTrue(ListViewQty.get(i).isDisplayed());
			Assert.assertTrue(ListViewPlus.get(i).isDisplayed());
			
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].scrollIntoView();", ListViewProductName.get(i));
			
			ListViewProductName.get(i).click();

			Assert.assertEquals(accessories[i], ProductName.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "CODE"),
					ProductItemNumber.getText());
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PRICE").replace(",", ""),
					ProductPrice.getText().replace(" ", "") + " TAX INCLUDED");
			Assert.assertEquals(p.getProperty(ProductName.getText().replace(" ", "") + "PV"),
					Productpv.getText().replace("PV: ", ""));
			Thread.sleep(5000);
			Assert.assertTrue(ShareLink.isDisplayed());
			for (int j = 0; j < qty.length; j++) {
				Assert.assertEquals(SingleProductQty.get(j).getText(), qty[j]);
			}
			Assert.assertTrue(SingleAddtoCart.isDisplayed());
			jse.executeScript("window.scrollBy(0,250)", "");
			Assert.assertEquals(ProductDescription.getText(), p.getProperty(ProductName.getText().replace(" ", "")));
			Back.click();
		}
		
	}

}
