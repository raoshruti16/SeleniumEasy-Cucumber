package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class Table {
WebDriver driver;
	

	//TablePagination
	@Given("^I open the app$")
	public void I_open_the_app() throws Throwable{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\shruti.rao\\eclipse-workspace\\chromedriver.exe");
		Thread.sleep(1000);
		driver = new ChromeDriver();
        driver.get("https://www.seleniumeasy.com/test/");
        driver.manage().window().maximize();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\'at-cv-lightbox-button-holder\']/a[2]"))).click();
        waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/a"); 
	}

	
	@And("^I click on Table tab$")
	public void open_table() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[3]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[3]/a")).click();
	}
	
	
	@And("^I choose Table pagination$")
	public void table_pagination() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[3]/ul/li[1]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[3]/ul/li[1]/a")).click();
	}
	
	
	
	@And("^I click on button2$")
	public void button2() throws Throwable{
		waitForElementVisible("//*[@id=\"myPager\"]/li[3]/a");
		driver.findElement(By.xpath("//*[@id=\"myPager\"]/li[3]/a")).click();
	}
	
	
	
	@And("^I check two arrows$")
	public void check_2arrow() throws Throwable{
		waitForElementVisible("//*[@id=\"myPager\"]/li[1]/a");
		if(driver.findElement(By.xpath("//*[@id=\"myPager\"]/li[1]/a")).isDisplayed()) {
			
		if(driver.findElement(By.xpath("//*[@id=\"myPager\"]/li[5]/a")).isDisplayed()) {
			System.out.println("checked 2 arrows");
		}
		else System.out.println("not checked 2 arrows");
		}
	}
	
	
	
	@And("^I click on button3$")
	public void button3() throws Throwable{
		waitForElementVisible("//*[@id=\"myPager\"]/li[4]/a");
		driver.findElement(By.xpath("//*[@id=\"myPager\"]/li[4]/a")).click();
	}
	
	
	
	@Then("^I check one arrow$")
	public void one_arrow() throws Throwable{
		waitForElementVisible("//*[@id=\"myPager\"]/li[1]/a");
		if(driver.findElement(By.xpath("//*[@id=\"myPager\"]/li[1]/a")).isDisplayed()) {
			System.out.println("checked 1 arrow");
		}
		else System.out.println("not checked 1 arrow");
	}
	
	
	
	//tableDataSearch
	@And("^I choose Table data search$")
	public void dataSearch() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[3]/ul/li[2]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[3]/ul/li[2]/a")).click();
	}
	
	
	@And("^I search (.*) in searchbar$")
	public void search(String str) throws Throwable {
		waitForElementVisible("//*[@id=\"task-table-filter\"]");
		driver.findElement(By.xpath("//*[@id=\"task-table-filter\"]")).sendKeys(str);
		
	}
	
	
	@Then("^I verify it is displayed$")
	public void verify() throws Throwable{
		waitForElementVisible("//*[@id=\"task-table\"]/tbody/tr[4]");
		if(driver.findElement(By.xpath("//*[@id=\"task-table\"]/tbody/tr[4]")).isDisplayed()) {
			System.out.println("displayed");
		}
		else System.out.println("not displayed");
	}
	

	@Then("^I close the pg$")
	public void close1() throws Throwable{
		driver.close();
	}

	
	public void waitForElementVisible(String locater) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locater)));
    }
	
}
