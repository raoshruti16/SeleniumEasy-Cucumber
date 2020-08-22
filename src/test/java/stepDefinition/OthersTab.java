package stepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

public class OthersTab{
	WebDriver driver;

	
	//ThreeDropDown
	@Given("^I am able to launch the site$")
	public void i_am_able_to_launch_the_site() throws Throwable{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\shruti.rao\\eclipse-workspace\\chromedriver.exe");
		Thread.sleep(1000);
		driver = new ChromeDriver();
        driver.get("https://www.seleniumeasy.com/");
        driver.findElement(By.xpath("//*[@id=\"block-block-57\"]/div/div/a")).click();
        driver.manage().window().maximize();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\'at-cv-lightbox-button-holder\']/a[2]"))).click();
        waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/a");
	
	}
	
	
	@When("^I click on Others Tab$")
	public void i_click_on_others_tab() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/a")).click();
	    
	}
	
	//PageLocation
	@Then("^I verify (.*) is getting displayed$")
	public void i_verify_values_are_getting_displayed(String str)  throws Throwable{
			webWait(str);
		 boolean status = driver.findElement(By.linkText(str)).isDisplayed();
		 Assert.assertEquals(true, status);
	}

	
	@Given("^I verify others tab is present$")
	public void i_verify_others_tab_is_present() throws Throwable {
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/a");
		 boolean status = driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/a")).isDisplayed();
		 Assert.assertEquals(true, status);
	}
	
	
	@When("^I click on (.*) in the drop down menu$")
	public void i_click_on_an_item_in_the_drop_down_menu(String str)  throws Throwable{
		webWait(str);
		driver.findElement(By.linkText(str)).click();  
	}
	
	
	@Then("^I verify that it takes me to (.*) page$")
	public void i_verify_that_it_takes_me_to_another_page(String str)  throws Throwable {
		if(driver.getCurrentUrl().contains(str)) {
			System.out.println("Pass");
		}
		else System.out.println("Fail");
	}

	
	//DynamicLoading
	 @And("^I click on dynamic loading tab$")
	 public void I_click_on_dynamic_loading_tab() throws Throwable{
		 waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/ul/li[2]/a");
		 driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/ul/li[2]/a")).click();
	 }
	    
	 
	 @And("^I check the user and again click new user and check$")
	 public void I_check_the_user_and_again_click_new_user_and_check() throws Throwable{
		 waitForElementVisible("//*[@id=\"save\"]");
		 driver.findElement(By.xpath("//*[@id=\"save\"]")).click();
		 
		String s1 = driver.findElement(By.xpath("//*[@id=\"loading\"]")).getText();
		String s2 = driver.findElement(By.xpath("//*[@id=\"loading\"]")).getText();
		
		driver.findElement(By.xpath("//*[@id=\"save\"]")).click();
		String n1 = driver.findElement(By.xpath("//*[@id=\"loading\"]")).getText();
		String n2 = driver.findElement(By.xpath("//*[@id=\"loading\"]")).getText();
		if(s1 != n1 && s2!= n2) {
			System.out.println("they are not equal so pass");
		}
		else System.out.println("they are same so fail");
	 }
	
	 
	@Then("^I close$")
	public void close() throws Throwable{
		driver.close();
	}
	
	
	public void waitForElementVisible(String locater) {
	    WebDriverWait wait = new WebDriverWait(driver, 10);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locater)));
	}
	
	
	public void webWait(String locate) {
	    WebDriverWait wait = new WebDriverWait(driver, 10);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(locate)));
	}
	
	
	public void WaitE(String locate) {
	    WebDriverWait wait = new WebDriverWait(driver, 10);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(locate)));
	}

}
