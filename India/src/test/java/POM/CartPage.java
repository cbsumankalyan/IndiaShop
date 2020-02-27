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
	List<WebElement> ProductQty;

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

	@FindBy(xpath = "//span[@class= 'items-proceed']//following-sibling::translate")
	private WebElement MustHaveProducts;

	@FindBy(xpath = "//span[@class='back-to-shop']")
	private WebElement BackTOShop;
	
	@FindBy(xpath = "//div[contains(@title, 'View Products in a Grid')]")
	private WebElement GridView;
	
	@FindBy(xpath = "//a[text()= ' Calcium Magnesium Complex ']/parent::div/parent::div/following-sibling::div/div[2]")
	private WebElement AddProductinGrid;
	
	@FindBy(xpath = "//a[text()= ' Calcium Magnesium Complex ']/parent::div/parent::div")
	private WebElement ProductClick;
	
	@FindBy(xpath = "//a[text()= ' Calcium Magnesium Complex ']/parent::div/parent::div/following-sibling::div/div/div/button/b")
	private WebElement GridQty;
	
	@FindBy(xpath = "//a[text()= ' Calcium Magnesium Complex ']/parent::div/parent::div/following-sibling::div/div/div/button/translate")
	private WebElement GridinCart;
	
	@FindBy(xpath = "//a[text()= ' Calcium Magnesium Complex ']/following-sibling::div[1]")
	private WebElement ProductPrice;
	
	@FindBy(xpath = "//h2")
	private WebElement ProductNames;
	
	@FindBy(xpath = "//a[text()= ' Calcium Magnesium Complex ']/following-sibling::div[2]/div[contains(@class, 'pv-amount')]")
	private WebElement ProductPV;
	
	@FindBy(xpath = "//span[contains(@class,'item-number')]")
	private WebElement ProductItemNumber;
	
	@FindBy(xpath = "//div[@class='price']//span[contains(@class,'pv')]")
	private WebElement Productpv;
	
	@FindBy(xpath = "(//span[contains(@ng-class, 'large-price')])[2]")
	private WebElement PPrice;
	
	@FindBy(xpath = "//button[@ng-click='app.toCart()']/b")
	private WebElement PQty;
	
	@FindBy(xpath = "//button[@ng-click='app.toCart()']/translate")
	private WebElement PInCart;
	
	@FindBy(xpath = "//a[@ng-click= 'prodInfo.goBack()']")
	private WebElement Back;
	
	@FindBy(xpath = "//button[@class='share-link']")
	private WebElement Share;
	
	@FindBy(xpath = "//span[@class='shipping-reflected']")
	private WebElement ShippingReflect;
	
	@FindBy(xpath = "//span[@ng-show='!cartInfo.isArEditMode']")
	private WebElement Continue;
	
	public CartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void cart() throws InterruptedException {

		Thread.sleep(5000);
		ALLProducts.click();
		List.click();
		CalciumMagnesium.click();
	}

	public void cartdetails() throws InterruptedException, IOException {

		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);

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
		String[] ProductInfo = ProductPricePV.getText().split(" ");
		Assert.assertEquals(itemcode, ProductInfo[0]);
		Assert.assertEquals(pv, ("PV: " + ProductInfo[2]));

		Assert.assertEquals(p.getProperty("CALCIUM MAGNESIUM COMPLEX".replace(" ", "") + "PRICE"),
				ProductCost.getText().toUpperCase());
		Assert.assertEquals(price, CartCost.getText().replace("Tax Included", "").trim());
		for (int j = 0; j < qty.length; j++) {
			Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
		}

		Assert.assertEquals(TotalPV.getText(), "Total PV");
		Assert.assertEquals(Subtotal.getText(), "Subtotal");

		Assert.assertEquals(p.getProperty("CALCIUM MAGNESIUM COMPLEX".replace(" ", "") + "PV"), TOTALPV.getText());
		Assert.assertEquals(price, SUBTOTAL.getText());

	}

	public void removeproduct() throws InterruptedException {
		
		RemoveProduct.click();

		Assert.assertEquals(MustHaveProducts.getText(), "You must have items in your cart to proceed with Checkout.");
		Assert.assertTrue(BackTOShop.isDisplayed());

		Assert.assertEquals(TotalPV.getText(), "Total PV");
		Assert.assertEquals(Subtotal.getText(), "Subtotal");

		Assert.assertEquals(TOTALPV.getText(), "0");
		Assert.assertEquals(SUBTOTAL.getText(), "₹0.00");

	}
	
	public void addproduct() throws InterruptedException {
		
		ContinueShoping.click();
		Thread.sleep(5000);
		ALLProducts.click();
		GridView.click();
		AddProductinGrid.click();
		
		String pr = ProductPrice.getText().split(" TAX ")[0];
		String v = ProductPV.getText();
		Assert.assertEquals(GridQty.getText(), "1");
		Assert.assertEquals(GridinCart.getText(), "In Cart");
		
		
		Assert.assertEquals(pr, CartPrice.getText());
		Assert.assertEquals(v, CartPV.getText());
		
		ProductClick.click();
		
		
	}
	
	public void checkproduct() throws InterruptedException, IOException {
		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);
		
		Assert.assertEquals(p.getProperty(ProductNames.getText().replace(" ", "") + "CODE"),
				ProductItemNumber.getText());
		Assert.assertEquals(p.getProperty(ProductNames.getText().replace(" ", "") + "PRICE").replace(",", ""),
				PPrice.getText().replace(" ", "") + " TAX INCLUDED");
		Assert.assertEquals(p.getProperty(ProductNames.getText().replace(" ", "") + "PV"),
				Productpv.getText().replace("PV: ", ""));

		Assert.assertEquals(CartQTY.getText(), "1");
		
		Assert.assertEquals(p.getProperty(ProductNames.getText().replace(" ", "") + "PRICE").replace(",", ""), CartPrice.getText()+" TAX INCLUDED");
		Assert.assertEquals("PV: "+(p.getProperty(ProductNames.getText().replace(" ", "") + "PV")), CartPV.getText());
		
		Assert.assertEquals(PQty.getText(), "1");
		Assert.assertEquals(PInCart.getText(), "In Cart");
		
		Assert.assertTrue(Back.isDisplayed());
		Assert.assertTrue(Share.isDisplayed());
	}
	
	public void checkcart() throws IOException{
		
		FileReader type = new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties");
		Properties p = new Properties();
		p.load(type);
		
		String name = "CALCIUM MAGNESIUM COMPLEX";
		String itemcode = ProductItemNumber.getText();
		String price = PPrice.getText();
		String pv = Productpv.getText();
		PInCart.click();
		Assert.assertTrue(ContinueShoping.isDisplayed());
		Assert.assertTrue(YourCartItems.isDisplayed());

		Assert.assertEquals(ProductName.getText(), name);
		String[] ProductInfo = ProductPricePV.getText().split(" ");
		Assert.assertEquals(itemcode, ProductInfo[0]);
		Assert.assertEquals(pv, ("PV: " + ProductInfo[2]));

		Assert.assertEquals(p.getProperty("CALCIUM MAGNESIUM COMPLEX".replace(" ", "") + "PRICE"),
				ProductCost.getText().toUpperCase());
		Assert.assertEquals(price.replace(" ", ""), CartCost.getText().replace("Tax Included", "").trim());
		for (int j = 0; j < qty.length; j++) {
			Assert.assertEquals(ProductQty.get(j).getText(), qty[j]);
		}

		Assert.assertEquals(TotalPV.getText(), "Total PV");
		Assert.assertEquals(Subtotal.getText(), "Subtotal");

		Assert.assertEquals(p.getProperty("CALCIUM MAGNESIUM COMPLEX".replace(" ", "") + "PV"), TOTALPV.getText());
		Assert.assertEquals(price.replace(" ", ""), SUBTOTAL.getText());
		
		Assert.assertEquals(ShippingReflect.getText(), "Total does not\nreflect shipping");
		
		productdetails.put("name", name);
		productdetails.put("price", price);
		productdetails.put("pv", pv);
		productdetails.put("itemcode", itemcode);
		productdetails.put("qty", "1");
		
		Continue.click();
	}
}
