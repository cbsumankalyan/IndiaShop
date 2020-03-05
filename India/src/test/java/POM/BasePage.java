package POM;


import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import org.openqa.selenium.WebDriver;

public class BasePage {
	
	protected String getTranslation(String value) throws IOException {
		
		Properties p = new Properties();
		p.load(new FileReader(
				"C:/Users/sumancb/git/IndiaShop/India/src/test/java/property/catalog.properties"));
		return p.getProperty(value);
	}
			

	public static WebDriver driver;
	public static String[] qty = { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+" };
	public static String[] allproducts = { "BIOS LIFE AIR FILTER", "BLENDER BOTTLE W/AGITATOR", "CALCIUM MAGNESIUM COMPLEX",
			"CAP REVOLUTION GREEN IND", "CATALOGUE KIT INDIA", "KIDDO SACHETS 16", "LEAN COMPLETE VANILLA 25 IND",
			"NATURE'S TEA", "NEIGENE BAG", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS", "PIN UNICITY LAPEL IN",
			"REVOLUTION GREEN PACK", "SUPER CHLOROPHYLL PACK", "T-SHIRT MATCHA LAUNCH SMALL",
			"T-SHIRT REVOLUTION GREEN MED IND", "T-SHIRT REVOLUTION GREEN XL IND", "UNICITY ACTIVATE (INDIA)",
			"UNICITY BALANCE 30", "UNICITY BIO REISHI S COFFEE", "UNICITY BIOS LIFE SLIM",
			"UNICITY CLEAR START KIT", "UNICITY FAMILY PACK", "UNICITY LIFIBER 28 IN", "UNICITY PREMIUM MATCHA IN",
			"UNICITY PREMIUM SUPER CHLOROPHYLL IN", };
	public static String[] products = { "BIOS LIFE AIR FILTER", "CALCIUM MAGNESIUM COMPLEX", "KIDDO SACHETS 16",
			"LEAN COMPLETE VANILLA 25 IND", "NATURE'S TEA", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS",
			"PIN UNICITY LAPEL IN", "REVOLUTION GREEN PACK", "SUPER CHLOROPHYLL PACK", "UNICITY ACTIVATE (INDIA)",
			"UNICITY BALANCE 30", "UNICITY BIO REISHI S COFFEE", "UNICITY BIOS LIFE SLIM",
			"UNICITY CLEAR START KIT", "UNICITY FAMILY PACK", "UNICITY LIFIBER 28 IN", "UNICITY PREMIUM MATCHA IN",
			"UNICITY PREMIUM SUPER CHLOROPHYLL IN" };
	public static String[] accessories = { "BLENDER BOTTLE W/AGITATOR", "CAP REVOLUTION GREEN IND", "CATALOGUE KIT INDIA",
			"NEIGENE BAG", "T-SHIRT MATCHA LAUNCH SMALL", "T-SHIRT REVOLUTION GREEN MED IND",
			"T-SHIRT REVOLUTION GREEN XL IND" };
	public static Map<String, String> productdetails = new HashMap<String, String>();
	public static Map<String, String> userdata = new HashMap<String, String>();	
}
