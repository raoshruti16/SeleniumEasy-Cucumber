package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class AlertTab {
WebDriver driver;
	
	//fileDownload
	@Given("^I open$")
	public void I_open_the_application() throws Throwable{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\shruti.rao\\eclipse-workspace\\chromedriver.exe");
		driver = new ChromeDriver();
        driver.get("https://www.seleniumeasy.com/test/");
        driver.manage().window().maximize();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\'at-cv-lightbox-button-holder\']/a[2]"))).click();
        waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/a"); 
  }


	@And("^I click on alert tab$")
	public void alert_tab() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/a")).click();
	}
	
	
	@And("^I choose file download$")
	public void file_download() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/ul/li[6]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/ul/li[6]/a")).click();
	}
	
	
	@And("^Send (.*) in file$")
	public void type_files(String str) throws Throwable{
		waitForElementVisible("//*[@id=\"textbox\"]");
		driver.findElement(By.xpath("//*[@id=\"textbox\"]")).sendKeys(str);
		driver.findElement(By.xpath("//*[@id=\"textbox\"]")).sendKeys(Keys.ENTER);
	}
	
	

	@And("^I click on generate file$")
	public void generate_file() throws Throwable{
		waitForElementVisible("//*[@id=\"create\"]");
		WebElement e = driver.findElement(By.xpath("//*[@id=\"create\"]"));
		System.out.println(e.isEnabled());
		driver.findElement(By.xpath("//*[@id=\"create\"]")).click();
	
	}
	
	
	
	@Then("^I verify download$")
	public void verify_download() throws Throwable{
		waitForElementVisible("//*[@id=\"link-to-download\"]");
		WebElement element=new WebDriverWait(driver,30).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"link-to-download\"]")));
		if(driver.findElement(By.linkText("Download")).isDisplayed()) {
			System.out.println("Downloaded");
		}
		else System.out.println("Not Downloaded");	
	}
	
	
	
	//JavascriptAlert
	@And("^I choose javascript alert$")
	public void javascript_alert() throws Throwable{
		waitForElementVisible("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/ul/li[5]/a");
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/ul/li[5]/a")).click();
	}
	
	
	@And("^I click on prompt box$")
	public void prompt_box() throws Throwable{
		waitForElementVisible("//*[@id=\"easycont\"]/div/div[2]/div[3]/div[2]/button");
		driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[3]/div[2]/button")).click();
	}
	
	
	@And("^I send (.*) in alert$")
	public void send_alert(String str) throws Throwable{
		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.alertIsPresent());;
		driver.switchTo().alert().sendKeys(str);
	}
	
	
	@Then("^I click on ok button$")
	public void ok_button() throws Throwable{
		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.alertIsPresent());
		driver.switchTo().alert().accept();
	}
	

	@Then("^I close them$")
	public void closeit() throws Throwable{
		driver.close();
	}

	
	public void waitForElementVisible(String locater) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locater)));
    }
	
}
