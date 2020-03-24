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
	public static String[] allproducts = { "BIOS LIFE AIR", "BIOS LIFE COFFEE 30 IN", "BLENDER BOTTLE W/AGITATOR", "CALCIUM MAGNESIUM COMPLEX",
			"CAP REVOLUTION GREEN IND", "CATALOGUE KIT INDIA", "ENRICH 500 GRAM IN", "KIDDO SACHETS 16", "LEAN COMPLETE VANILLA 25 IND",
			"NATURE'S TEA", "NEIGENE BAG", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS", "PIN UNICITY LAPEL IN",
			"SUPER CHLOROPHYLL PACK", "T-SHIRT REVOLUTION GREEN MED IND",
			"UNICITY ACTIVATE 30 IN",
			"UNICITY BALANCE 30", "UNICITY BIOS LIFE SLIM", "UNICITY CATALOGUE IN",
			"UNICITY CLEAR START KIT", "UNICITY FAMILY PACK", "UNICITY LIFIBER 28 IN",
			"UNICITY OPPORTUNITY DECK IN", "UNICITY PREMIUM MATCHA IN", "UNICITY PREMIUM SUPER CHLOROPHYLL IN", };
	public static String[] products = { "BIOS LIFE AIR", "BIOS LIFE COFFEE 30 IN", "CALCIUM MAGNESIUM COMPLEX", "ENRICH 500 GRAM IN", "KIDDO SACHETS 16",
			"LEAN COMPLETE VANILLA 25 IND", "NATURE'S TEA", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS",
			"PIN UNICITY LAPEL IN", "SUPER CHLOROPHYLL PACK", "UNICITY ACTIVATE 30 IN",
			"UNICITY BALANCE 30", "UNICITY BIOS LIFE SLIM", "UNICITY CATALOGUE IN",
			"UNICITY CLEAR START KIT", "UNICITY FAMILY PACK", "UNICITY LIFIBER 28 IN", "UNICITY OPPORTUNITY DECK IN", "UNICITY PREMIUM MATCHA IN",
			"UNICITY PREMIUM SUPER CHLOROPHYLL IN" };
	public static String[] accessories = { "BLENDER BOTTLE W/AGITATOR", "CAP REVOLUTION GREEN IND", "CATALOGUE KIT INDIA",
			"NEIGENE BAG", "T-SHIRT REVOLUTION GREEN MED IND" };
	
	public static String[] retailallproducts = { "BLENDER BOTTLE W/AGITATOR", "CALCIUM MAGNESIUM COMPLEX",
			"KIDDO SACHETS 16", "LEAN COMPLETE VANILLA 25 IND",
			"NATURE'S TEA", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS", 
			"UNICITY BALANCE 30", "UNICITY BIOS LIFE SLIM",
			"UNICITY CLEAR START KIT",};
	public static String[] retailproducts = { "CALCIUM MAGNESIUM COMPLEX", "KIDDO SACHETS 16",
			"LEAN COMPLETE VANILLA 25 IND", "NATURE'S TEA", "NEIGENE COLLAGEN PLUS", "PARAWAY PLUS",
			"UNICITY BALANCE 30", "UNICITY BIOS LIFE SLIM",
			"UNICITY CLEAR START KIT",};
	public static String[] retailaccessories = { "BLENDER BOTTLE W/AGITATOR"};
	
	public static Map<String, String> productdetails = new HashMap<String, String>();
	public static Map<String, String> userdata = new HashMap<String, String>();	
}
