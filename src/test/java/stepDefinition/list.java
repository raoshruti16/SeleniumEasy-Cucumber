package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class list {
	WebDriver driver;
	WebElement element;
	
	//ListBox
	@Given("^I login to the page$")
	public void i_login_to_the_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\shruti.rao\\eclipse-workspace\\chromedriver.exe");
		driver = new ChromeDriver();
		String baseUrl = "https://www.seleniumeasy.com/test/";
		driver.get(baseUrl);
		driver.manage().window().maximize();
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\'at-cv-lightbox-button-holder\']/a[2]")))
				.click();
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[4]/a");
	}

	
	@Given("^I click on list box tab$")
	public void i_click_on_list_box_tab() throws Throwable {
		driver.findElement(By.xpath("//a[@class='dropdown-toggle'][contains(text(),'List Box')]")).click();
	}

	
	@Then("^I verify three drop down values are getting displayed$")
	public void i_verify_three_drop_down_values_are_getting_displayed() throws Throwable {
		List<WebElement> elements = driver.findElements(
				By.xpath("//li[@class='dropdown open']//ul[@class='dropdown-menu']//li"));
		System.out.println("count is" + elements.size());
	}

	
	@Given("^I click on bootstrap list box$")
	public void i_click_on_bootstrap_list_box() throws Throwable {
		driver.findElement(By.xpath("//ul[@class='dropdown-menu']//a[contains(text(),'Bootstrap List Box')]")).click();
	}

	
	
	@When("^I select some results (.*)$")
	public void i_select_some_results_bootstrap_duallist(String str) throws Throwable {
		driver.findElement(By.xpath("//li[contains(text(),'"+str+"')]")).click();
	}

	
	@When("^I press the shift elements button$")
	public void i_press_the_shift_elements_button() throws Throwable {
		driver.findElement(By.xpath(
				"//div[@class='list-arrows col-md-1 text-center']/descendant::button[@class='btn btn-default btn-sm move-right']"))
				.click();
	}

	
	@Then("^I verify the results (.*) are shifted$")
	public void i_verify_the_resultsbootstrap_duallist_are_shifted(String str) throws Throwable {
		Thread.sleep(5000);
		WebElement element = driver.findElement(By.xpath("//li[@class='list-group-item'][contains(text(),'"+str+"')]"));
		String s =element.getText();
		System.out.println(s);
		String e= str;
		Assert.assertEquals(e, s); 
	}

	
//DataListFilter
	@Given("^I click on data list filter tab$")
	public void i_click_on_data_list_filter_tab() throws Throwable {
		driver.findElement(By.xpath("//ul[@class='dropdown-menu']//a[contains(text(),'Data List Filter')]")).click();
	}

	
	@Given("^I enter a value (.*)$")
	public void i_enter_a_value_Tyreese_Burn(String str) throws Throwable {
		WebElement search = driver.findElement(By.xpath("//div[@class='col-lg-12']//input[@id='input-search']"));
		 search.sendKeys(str);
	}

	

	@Then("^I verify the results(.*) are shown$")
	public void i_verify_the_resultsTyreese_Burn_are_shown(String str) throws Throwable {

		List<WebElement> textDemo = driver.findElements(By.xpath("/html/body/div[2]/div/div[2]/section/div/div[2]/div[1]/div"));
		System.out.println("Number of web elements: " + textDemo.size());
		if (textDemo.size() > 0) {
			System.out.println("element is present");
		} else {
			System.out.println("element is absent");
		}
	}

	
//JqueryList	
	@Given("^I click on JQuery$")
	public void i_click_on_JQuery() throws Throwable {
		waitForElementVisible("//ul[@class='dropdown-menu']//a[contains(text(),'JQuery List Box')]");
		driver.findElement(By.xpath("//ul[@class='dropdown-menu']//a[contains(text(),'JQuery List Box')]")).click();
	}

	
	
	@Given("^I select a (.*) result$")
	public void i_select_a_result_Alice(String str) throws Throwable {
		waitForElementVisible("//option[contains(text(),'"+str+"')]");
		driver.findElement(By.xpath("//option[contains(text(),'"+str+"')]")).click();
		}


	
	@Given("^I click on Add button$")
	public void i_click_on_Add_button() throws Throwable {
		waitForElementVisible("//button[@class='pAdd btn btn-primary btn-sm']");
		driver.findElement(By.xpath("//button[@class='pAdd btn btn-primary btn-sm']")).click();
	}

	
	
	@Then("^I verify result (.*) is added$")
	public void i_verify_result_Alice_is_added(String str) throws Throwable {
		waitForElementVisible("//*[@id=\"pickList\"]/div/div[3]/select");
		List elements =driver.findElements(By.xpath("//*[@id=\"pickList\"]/div/div[3]/select"));
		if(elements.size() >0){
		    System.out.println("added");

		 } else {
		    System.out.println("has not been ");
		 }
	}

	
	
	@When("^I click on remove$")
	public void i_click_on_remove() throws Throwable {
		waitForElementVisible("//button[@class='pRemove btn btn-primary btn-sm']");
		driver.findElement(By.xpath("//button[@class='pRemove btn btn-primary btn-sm']")).click();
	}

	
	
	@Then("^I verify the element (.*) is removed$")
	public void i_verify_the_element_Aliceis_removed(String str) throws Throwable {
		waitForElementVisible("//*[@id=\"pickList\"]/div/div[3]/select");
		List elements =driver.findElements(By.xpath("//*[@id=\"pickList\"]/div/div[3]/select"));
		if(elements.size()==0){
		    System.out.println("Element has been removed");

		 } else {
		    System.out.println("has not been removed");
		 }
	}

	
//AddRemoveAll
	@When("^I click on addall button$")
	public void i_click_on_addall_button() throws Throwable {
		waitForElementVisible("//button[@class='pAddAll btn btn-primary btn-sm']");
	   driver.findElement(By.xpath("//button[@class='pAddAll btn btn-primary btn-sm']")).click();
	}

	

	@Then("^when I click on removeall button$")
	public void when_I_click_on_removeall_button() throws Throwable {
	waitForElementVisible("//button[@class='pRemoveAll btn btn-primary btn-sm']");
	driver.findElement(By.xpath("//button[@class='pRemoveAll btn btn-primary btn-sm']")).click();   
	}

	@Then("^I verify that all the results are added$")
	public void i_verify_that_all_the_results_are_added() throws Throwable {
		waitForElementVisible("//select[@class='form-control pickListSelect pickListResult']//option");
		List<WebElement> elements = driver.findElements(By.xpath("//select[@class='form-control pickListSelect pickListResult']//option"));
		System.out.println("count of elements after the action Addall " + elements.size());
		if(elements.size()==15) {
			System.out.println("All elements ADDED");
		}
		else {
			System.out.println("All elements NOT Added");
		}
		
	}

	
	
	@Then("^I verify  all the results are removed$")
	public void i_verify_all_the_results_are_removed() throws Throwable {
		//waitForElementVisible("//select[@class='form-control pickListSelect pickListResult']//option");
		List<WebElement> links = driver.findElements(By.xpath("//select[@class='form-control pickListSelect pickListResult']//option"));
		System.out.println("count of elements after the action RemoveAll " + links.size());
		if(links.size()==0) {
			System.out.println("All elements removed");
		}
		else {
			System.out.println("All elements not removed ");
		}
	}

	
	
	@Then("^I close it$")
	public void I_close_it() throws Throwable{
		driver.close();
	}

	
	
	public void waitForElementVisible(String locater) {
	    WebDriverWait wait = new WebDriverWait(driver, 10);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locater)));
	}
	

  
}