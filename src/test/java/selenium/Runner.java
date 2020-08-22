package selenium;
import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/Features", glue= {"stepDefinition"}, tags= {"@Test"},
plugin = { "pretty","html:target/cucumber-reports.html", "json:target/test-report/cucumber.json"},
monochrome = true)

public class Runner 
{
	
}