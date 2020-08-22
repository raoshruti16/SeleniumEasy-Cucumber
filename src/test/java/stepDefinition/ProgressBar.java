package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.concurrent.TimeUnit;

public class ProgressBar {
	
WebDriver driver;
	

	//StartDownload
	@Given("^I launch selenium easy website$")
	public void I_open_the_application() throws Throwable{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\shruti.rao\\eclipse-workspace\\chromedriver.exe");
		Thread.sleep(1000);
		driver = new ChromeDriver();
        driver.get("https://www.seleniumeasy.com/test/");
        driver.manage().window().maximize();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\'at-cv-lightbox-button-holder\']/a[2]"))).click();
        waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/a"); 
    }

	
	//ProgressBar
	@When("^I click on Progress Bar Tab$")
	public void i_click_on_Progress_Bar_Tab() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/a")).click();
	}


	@When("^I click on sub tab JQuery Download Progress bars$")
	public void i_click_on_sub_tab_JQuery_Download_Progress_bars() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/ul/li[1]/a")).click();
	}
	
	
	@When("^I click on Start Download button$")
	public void i_click_on_Start_Download_button() throws Throwable {
		 waitForElementVisible("//*[@id=\"downloadButton\"]");
	     driver.findElement(By.xpath("//*[@id=\"downloadButton\"]")).click();
	}
	
	
	@Then("^I verify download status is complete before clicking close button$")
	public void i_verify_download_status_is_complete_before_clicking_close_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"dialog\"]/div[1]")));
		String status=driver.findElement(By.xpath("//*[@id=\"dialog\"]/div[1]")).getText();
		if(status.equals("Complete!"))
		{
		     System.out.println("download status is complete before clicking close button");
		}
		else
		{
			System.out.println("NOT complete before clicking close button");
		}
	}

	
	@Then("^I click on Close button$")
	public void i_click_on_Close_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[3]/div[3]/div/button"))).click();
	}
	
	
	//Download
	@When("^I click on sub tab Bootstrap Progress Bar$")
	public void i_click_on_sub_tab_Bootstrap_Progress_Bar() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/ul/li[2]/a")).click();
	    
	}
	

	@Then("^I verify initial value of progress bar is \"(.*?)\"$")
	public void i_verify_initial_value_of_progress_bar_is(String arg1) throws Throwable {
		if((driver.findElement(By.xpath("//*[@id=\"circle\"]/div/div[1]")).getText()).equals(arg1))
		{
			System.out.println(". Initial is 0%"); 
		}
		else
		{
			System.out.println(". Initial is NOT 0%"); 
		}
	}

	
	@When("^I click on Downloadsize:(\\d+)kb button$")
	public void i_click_on_Downloadsize_kb_button(int arg1) throws Throwable {
		
		driver.findElement(By.xpath("//*[@id=\"cricle-btn\"]")).click();
	}
	

	@Then("^I verify the progress bar stops at (\\d+)%$")
	public void i_verify_the_progress_bar_stops_at(int arg1) throws Throwable {
		waitForElementVisible("//*[@id=\"circle\"]/div/div[1]");
	    if((driver.findElement(By.xpath("//*[@id=\"circle\"]/div/div[1]")).getText()).equals("100%"))
	    {
	    	System.out.println(". It stops at 100%");
	    }
	    else
	    {
	    	System.out.println(". It does NOT stops at 100%");
	    }    
	}

	
	  @Then("^I close app$")
		public void close() throws Throwable{
			driver.close();
		}

	
	public void waitForElementVisible(String locater) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locater)));
    }
	
}
