package stepDefinitions;

import POM.BasePage;
import POM.EssecomPage;
import cucumber.api.java.en.Then;

public class Essecom extends BasePage {
	
	EssecomPage payment = new EssecomPage(driver);
	
	@Then("^Essecom Payment Details$")
	public void essecom_payment_details() throws InterruptedException{
		payment.payment();
	}

}
