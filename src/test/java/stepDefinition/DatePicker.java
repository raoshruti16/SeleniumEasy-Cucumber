package stepDefinition;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DatePicker {


	WebDriver driver;
	
	//Calendar
	@Given("I login to the app")
	public void i_login_to_the_app() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\shruti.rao\\eclipse-workspace\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.seleniumeasy.com/test/");
		driver.manage().window().maximize();
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\'at-cv-lightbox-button-holder\']/a[2]"))).click();
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/a");
	}

	
	@And("^I click on Date pickers Tab$")
	public void i_click_on_date_pickers_tab() {
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/a")).click();
	}

	
	@Then("^I verify two drop-down values are getting displayed$")
	public void i_verify_two_drop_down_values_are_getting_displayed() {
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li");
		List<WebElement> listOptionDropdown = driver.findElements(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li"));
		int dropdownCount = listOptionDropdown.size();
		int e = 2;
		Assert.assertEquals(e, dropdownCount);	
	}
	
	
	@And("^I click on Bootstrap Date Picker tab$")
	public void i_click_on_bootstrap_date_picker_tab() {
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[1]/a")).click();
	}

	
	@Then("^I verify if the bootstrap Date Picker Tab page is displayed$")
	public void i_verify_if_the_bootstrap_date_picker_tab_page_is_displayed() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
		String title=driver.getTitle();
		String actual="Selenium Easy - Best Demo website for Bootstrap Date picker";
		Assert.assertEquals(title, actual);
	}

	
	@When("^I click on JQuery Date Picker tab$")
	public void i_click_on_j_query_date_picker_tab() throws InterruptedException {
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[2]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[2]/a")).click();
	}

	
	@Then("^I verify if the  JQuery Date Picker page is displayed$")
	public void i_verify_if_the_j_query_date_picker_page_is_displayed() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
		String title1=driver.getTitle();
		String actual1="Selenium Easy - JQuery Date picker demo";
		Assert.assertEquals(title1, actual1);
		System.out.println("passed");
	}
	
	
	@When("^I click on Calendar button$")
	public void i_click_on_calendar_button() throws InterruptedException {
		Thread.sleep(10000);
		waitForElementVisible("//*[@id=\"sandbox-container1\"]/div");
		driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div")).click();
	}

	
	@Then("^I verify if calendar is displayed$")
	public void i_verify_if_calendar_is_displayed() {
		waitForElementVisible("/html/body/div[3]/div[1]/table");
		if(driver.findElement(By.xpath("/html/body/div[3]/div[1]/table")).isDisplayed()) {
			System.out.println("test case passed: calendar displayed");
		}
		else {
			System.out.println("test case failed: calendar not displayed");
		}
	}
	
	
	
	@When("^I select some date from the list$")
	public void i_select_some_date_from_the_list() {
		waitForElementVisible("/html/body/div[3]/div[1]/table/tbody/tr[3]/td[3]");
			driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tbody/tr[3]/td[3]")).click();
	}

	
	
	@Then("^I verify if date is displayed in the text box$")
	public void i_verify_if_date_is_displayed_in_the_text_box() throws InterruptedException {
		waitForElementVisible("//*[@id=\"sandbox-container1\"]/div/input");
		WebElement w2=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
		System.out.println(w2.getAttribute("value"));
	}
	
	//clearButton
	@When("^I select clear tab$")
	public void i_select_clear_tab() {
		waitForElementVisible("/html/body/div[3]/div[1]/table/tfoot/tr[2]/th");
		driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tfoot/tr[2]/th")).click();
	}

	
	@Then("^I verify if date textbox is empty$")
	public void i_verify_if_date_textbox_is_empty() throws InterruptedException {
		waitForElementVisible("//*[@id=\"sandbox-container1\"]/div/input");
		WebElement w1=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
		if (w1.getAttribute("value").isEmpty()) {
			System.out.println("textbox empty");
		}
		else {
			System.out.println("textbox not empty");
		}
	}


	//TodayButton
	@And("^I click on today button$")
	public void I_click_on_today_button() throws Throwable{
		waitForElementVisible("/html/body/div[3]/div[1]/table/tfoot/tr[1]/th");
		driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tfoot/tr[1]/th")).click();
	}
	
	@Then("^I verify if date is today$")
	public void I_verify_if_date_is_today() throws Throwable{
		waitForElementVisible("//*[@id=\"sandbox-container1\"]/div/input");
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy"); 
		 Date date = new Date();
		 String date1= dateFormat.format(date);
		 WebElement w1=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
		 String w2 =w1.getAttribute("value");
		 Assert.assertEquals(w2, date1);
	}
	
	
	//RangeDate
	@When("^I click on From text field$")
	public void i_click_on_from_text_field() {
		waitForElementVisible("//*[@id=\"from\"]");
		driver.findElement(By.xpath("//*[@id=\"from\"]")).click();
	}

	
	@Then("^I verify that the calendar is displayed$")
	public void i_verify_that_the_calendar_is_displayed() {
		waitForElementVisible("//*[@id=\"ui-datepicker-div\"]/table");
		if(driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]/table"))!=null) {
			System.out.println("calendar displayed");
		}
		else {
			System.out.println("calendar not displayed");
		}
	}

	
	
	@And("^I click on To text field$")
	public void i_click_on_text_field() throws InterruptedException {
		waitForElementVisible("//*[@id=\"to\"]");
		driver.findElement(By.xpath("//*[@id=\"to\"]")).click();
	}

	
	
	@Then("^I verify that calendar is present$")
	public void I_verify_that_calendar_is_present() throws Throwable {
		waitForElementVisible("//*[@id=\"ui-datepicker-div\"]");
		if(driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]"))!=null) {
			System.out.println("calendar is present");
		}
		else {
			System.out.println("calendar is absent");
		}	
	}
	
	
	
	  @And("^I click on From and To text field and select date and verify$")
	  public void I_click_on_From_text_field_and_select_date() throws Throwable{
		  Thread.sleep(5000);
		  waitForElementVisible("//*[@id=\"from\"]");
		  Date d = new Date();
		  driver.findElement(By.xpath("//*[@id=\"from\"]")).click();
		  waitForElementVisible("//*[@id=\"ui-datepicker-div\"]/table/tbody/tr[2]/td[3]/a");
		  driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]/table/tbody/tr[2]/td[3]/a")).click();
		  
		  WebElement f =driver.findElement(By.xpath("//*[@id=\"from\"]"));
		  String from =f.getAttribute("value");
		  Date date1 = new SimpleDateFormat("MM/dd/yyyy").parse(from);
		  
		  waitForElementVisible("//*[@id=\"to\"]");
		  driver.findElement(By.xpath("//*[@id=\"to\"]")).click();
		  waitForElementVisible("//*[@id=\"ui-datepicker-div\"]/table/tbody/tr[4]/td[3]/a");
		  driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]/table/tbody/tr[4]/td[3]/a")).click();
		  
		  WebElement t =driver.findElement(By.xpath("//*[@id=\"to\"]"));
		  String to =t.getAttribute("value");
		  Date date2 = new SimpleDateFormat("MM/dd/yyyy").parse(to);
		  Assert.assertEquals(-1,date1.compareTo(date2));	 
	  } 
	  
	
	  
	  @Then("^I close the app$")
		public void close() throws Throwable{
			driver.close();
		}

	  

	public void waitForElementVisible(String locater) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locater)));
    }
}
