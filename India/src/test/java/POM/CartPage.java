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

public class CartPage extends BasePage {
	
	@FindBy(xpath = "//translate[text()= 'All Products']")
	private WebElement ALLProducts;
	
	@FindBy(xpath = "//div[contains(@title, 'List')]")
	private WebElement List;
	
	@FindBy(xpath = "//*[text()='Calcium Magnesium Complex']/parent::div/parent::div/following-sibling::div/div[2]/span[2]")
	private WebElement CalciumMagnesium;
	
	@FindBy(xpath = "//div[contains(@class, 'items-qty')]")
	private WebElement Quantity;
	
	@FindBy(xpath = "//*[@title='Add to Cart']")
	private WebElement AddtoCart;
	
	@FindBy(xpath = "//span[contains(@class,'qty-icon')]")
	private WebElement CartQTY;
	
	@FindBy(xpath = "//*[text()='Calcium Magnesium Complex']/parent::div/parent::div/following-sibling::div/div/div[2]/div[1]")
	private WebElement CalciumMagnesiumPrice;
	
	@FindBy(xpath = "//*[text()='Calcium Magnesium Complex']/parent::div/parent::div/following-sibling::div/div/div[2]/div[2]")
	private WebElement CalciumMagnesiumPV;
	
	@FindBy(xpath = "//*[text()='Calcium Magnesium Complex']/parent::div/parent::div/following-sibling::div/div/div[1]")
	private WebElement CalciumMagnesiumItemCode;
	
	@FindBy(xpath = "//span[contains(@class,'pv-align')]")
	private WebElement CartPV;
	
	@FindBy(xpath = "//span[contains(@class,'total-text')]")
	private WebElement CartPrice;
	
	@FindBy(xpath = "//span[contains(@class, 'icon-cart')]")
	private WebElement Cart;
	
	@FindBy(xpath = "//div[@ng-show='app.isShopping']")
	private WebElement ContinueShoping;
	
	@FindBy(xpath = "//div[@class='cart-message']")
	private WebElement YourCartItems;

	@FindBy(xpath = "//span[contains(@class, 'product-name')]")
	private WebElement ProductName;
	
	@FindBy(xpath = "//div[@class = 'product-info']")
	private WebElement ProductPricePV;
	
	@FindBy(xpath = "//div[contains(@class, 'product-cost')]")
	private WebElement ProductCost;
	
	@FindBy(xpath = "//div[contains(@class, 'cart-cost')]")
	private WebElement CartCost;
	
	@FindBys(@FindBy(xpath = "//select[contains(@ng-model, 'p.qty')]//option"))
	List <WebElement> ProductQty;
	
	@FindBy(xpath = "//span[contains(@class, 'total-title n')]")
	private WebElement TotalPV;
	
	@FindBy(xpath = "//span[@class= 'total-title']")
	private WebElement Subtotal;
	
	@FindBy(xpath = "//span[contains(@class, 'total-number ng-binding ng-scope')]")
	private WebElement TOTALPV;
	
	@FindBy(xpath = "//span[@ng-show='taxInclusive']")
	private WebElement SUBTOTAL;
	
	@FindBy(xpath = "//span[@class='shipping-reflected']")
	private WebElement TotalNotRefletShipping;
	
	@FindBy(xpath = "//span[contains(@ng-click, 'removeProduct')]")
	private WebElement RemoveProduct;
	
	public CartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void cart() throws InterruptedException, IOException {
		
		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);
		
		Thread.sleep(5000);
		ALLProducts.click();
		List.click();
		CalciumMagnesium.click();
		
		String itemcode = CalciumMagnesiumItemCode.getText();
		String price = CalciumMagnesiumPrice.getText().replace(" Tax Included", "").replace(" ", "");
		String pv = CalciumMagnesiumPV.getText();
		
		Assert.assertEquals(Quantity.getText().replace("ITEMS: ", ""), "1");
		AddtoCart.click();
		Assert.assertEquals(Quantity.getText().replace("ITEMS: ", ""), "0");
		Assert.assertEquals(CartQTY.getText().replace("ITEMS: ", ""), "1");
		
		Assert.assertEquals(price, CartPrice.getText());
		Assert.assertEquals(pv, CartPV.getText());
		
		Cart.click();
		
		Assert.assertTrue(ContinueShoping.isDisplayed());
		Assert.assertTrue(YourCartItems.isDisplayed());
		
		Assert.assertEquals(ProductName.getText(), "CALCIUM MAGNESIUM COMPLEX");
		String [] ProductInfo = ProductPricePV.getText().split(" ");
		Assert.assertEquals(itemcode, ProductInfo[0]);
		Assert.assertEquals(pv, ("PV: "+ProductInfo[2]));	
		
		Assert.assertEquals(p.getProperty("CALCIUM MAGNESIUM COMPLEX".replace(" ", "") + "PRICE"),
				ProductCost.getText().toUpperCase());
		Assert.assertEquals(price,CartCost.getText().replace("Tax Included", "").trim());
		for (int j = 0; j < qty.length; j++) {
			Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
		}
		
		Assert.assertEquals(TotalPV.getText(), "Total PV");
		Assert.assertEquals(Subtotal.getText(), "Subtotal");
		
		Assert.assertEquals(p.getProperty("CALCIUM MAGNESIUM COMPLEX".replace(" ", "") + "PV"),
				TOTALPV.getText());
		Assert.assertEquals(price,SUBTOTAL.getText());
		
		RemoveProduct.click();
	}	
}
