package cucumberOptions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/feature",
		glue = "stepDefinitions",strict = true, monochrome = true,
		plugin= {"pretty","html:C:/xampp/htdocs/ShopReport", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
		)
public class TestRunner {
	
}
