package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class ReviewPage extends BasePage {

	@FindBy(xpath = "//a[@ng-click= 'review.goBack()']")
	private WebElement GoBack;

	@FindBy(xpath = "//span[@ng-show='!review.isArEditMode']")
	private WebElement CheckOut;

	@FindBy(xpath = "//span[contains(@ng-show,'shipping.method.type!==')]")
	private WebElement ShippingInformation;

	@FindBy(xpath = "//translate[text() = 'Contact Information']")
	private WebElement ContactInformation;

	@FindBy(xpath = "//translate[text() = 'Payment Information']")
	private WebElement PayemntInformation;

	@FindBy(xpath = "(//div[@ng-hide='review.noOrderData']/div/div[@class='row'])[1]")
	private WebElement Shipping;

	@FindBy(xpath = "(//div[@ng-hide='review.noOrderData']/div/div[@class='row'])[2]")
	private WebElement Contact;

	@FindBy(xpath = "(//div[@ng-hide='review.noOrderData']/div/div[@class='row'])[3]")
	private WebElement Payment;

	@FindBy(xpath = "//translate[text()='Review Order']")
	private WebElement ReviewOrder;

	@FindBy(xpath = "(//div[@class='product-info-wrapper']/div/span)[1]")
	private WebElement ProductName;

	@FindBy(xpath = "(//div[@class='product-info']/span)[2]")
	private WebElement ProductCode;

	@FindBy(xpath = "(//div[contains(@class,'product-cost')]/span)[1]")
	private WebElement Qty;

	@FindBy(xpath = "//span[@ng-show='p.product.terms.taxInclusive']")
	private WebElement PPPrice;

	@FindBy(xpath = "(//p[@class='total-title row'])[1]/span[2]")
	private WebElement ProductPrice;

	@FindBy(xpath = "//span[contains(@class, 'shipping-value')]")
	private WebElement ShippingPrice;

	@FindBy(xpath = "//p[@ng-show = '!totals.taxInclusiveNoAddTax']//span[contains(@class, 'total-value')]")
	private WebElement TaxPrice;

	@FindBy(xpath = "//p[@class = 'total-title total row']//span[contains(@class, 'total-value')]")
	private WebElement TotalPrice;

	@FindBy(xpath = "(//p[@class='total-title row'])[1]/span[1]")
	private WebElement SUBTOTAL;

	@FindBy(xpath = "(//p[@class='total-title row'])[2]/span[1]")
	private WebElement SHIPPING;

	@FindBy(xpath = "(//p[@class='total-title row'])[3]/span[1]")
	private WebElement TAXES;

	@FindBy(xpath = "(//div[contains(@ng-show, 'userType')]//span)[1]")
	private WebElement PVTOTAL;

	@FindBy(xpath = "(//translate[text()='Total'])[2]")
	private WebElement TOTAL;

	@FindBy(xpath = "//small[contains(@ng-show, 'totals.taxInclusive')]")
	private WebElement AmountWOVat;

	@FindBy(xpath = "(//div[contains(@ng-show, 'userType')]//span)[2]")
	private WebElement TotalPV;

	@FindBy(xpath = "//button[@href='#/cart']")
	private WebElement ModifyItems;

	@FindBy(xpath = "//button[@ng-click='review.submitOrder()']")
	private WebElement Continue;

	public ReviewPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void review() {

		Assert.assertTrue(GoBack.isDisplayed());
		Assert.assertEquals(ShippingInformation.getText(), "SHIPPING INFORMATION");
		Assert.assertEquals(ContactInformation.getText(), "CONTACT INFORMATION");
		Assert.assertEquals(PayemntInformation.getText(), "PAYMENT INFORMATION");
		Assert.assertEquals(CheckOut.getText(), "CHECKOUT");
		Assert.assertEquals(ReviewOrder.getText(), "REVIEW ORDER");

		Assert.assertTrue(ModifyItems.isDisplayed());
	}

	public void shipping() {
		Assert.assertEquals(Shipping.getText(),
				"SHIPPING INFORMATION Update\nIndia Training\nNo 999 Marine Drive\nBANGALORE, KA, 560042, IN");
	}

	public void contact() {
		Assert.assertEquals(Contact.getText(),
				"CONTACT INFORMATION Update\nPhone: 9845574725\nEmail: Manjunath.Shekhar@unicity.com");
	}

	public void payment() {
		Assert.assertEquals(Payment.getText(), "PAYMENT INFORMATION Update\nPayment Type: BankWire");
	}

	public void Orders() throws InterruptedException {
		Thread.sleep(5000);
		Assert.assertEquals(ProductName.getText(), productdetails.get("name"));
		Assert.assertEquals(ProductCode.getText(), productdetails.get("itemcode"));
//		Assert.assertEquals(PPPrice.getText().trim(), productdetails.get("price") + "TaxIncluded");
		Assert.assertEquals(Qty.getText().replace("QTY: ", ""), productdetails.get("qty"));
		System.out.println("dsafasfsadf");
		float pp = Float.parseFloat(ProductPrice.getText().replace("₹", ""));
		float sp = Float.parseFloat(ShippingPrice.getText().replace("₹", ""));
		float tp = Float.parseFloat(TaxPrice.getText().replace("₹", ""));
		float ttp = Float.parseFloat(TotalPrice.getText().replace("₹", "").replace(",", ""));

		Assert.assertEquals(ttp, pp + sp + tp);

		Assert.assertEquals(SUBTOTAL.getText(), "SUBTOTAL**:");
		Assert.assertEquals(SHIPPING.getText(), "SHIPPING**:");
		Assert.assertEquals(TAXES.getText(), "TAXES:");
		Assert.assertEquals(PVTOTAL.getText(), "PV TOTAL:");
		Assert.assertEquals(TOTAL.getText(), "TOTAL");
		Assert.assertEquals(AmountWOVat.getText(), "** Amounts without VAT");
		Assert.assertEquals(TotalPV.getText(), productdetails.get("pv").replace("PV: ", ""));

		Continue.click();
	}

}
