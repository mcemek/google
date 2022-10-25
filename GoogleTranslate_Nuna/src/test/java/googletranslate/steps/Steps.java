package googletranslate.steps;

//JUnit's import statement
import org.junit.Assert;

//Selenium's webdriver import statements
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//Cucumber's import statements
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

public class Steps {
	
	// Declare the driver
	   WebDriver driver;
	   
	   @Given("I am on the Google Translate page")
	   public void i_am_on_the_google_translate_page() {
	      // Find the directory path your project is currently in, and navigate to the folder containing your
	      // chromedriver.exe. (This assumes your chromedriver.exe is located in your project files, in a folder
	      // called drivers/chromedriver. If it's not there, make sure to change this to your local path! 
	      String projectPath = System.getProperty("user.dir");
	       System.setProperty("webdriver.chrome.driver", projectPath+"//drivers/chromedriver/chromedriver.exe");
	       driver = new ChromeDriver();
	       driver.get("https://translate.google.com/");
	   }
	    
	   @When("I enter {string} in Google Translate")
	   public void i_enter_french_in_google_translate(String French) throws Exception {
	      // Find the box with the ID of "source" on the Google Translate page, and submit a phrase in French.
	      // (This is pulled from the Cucumber scenario outline.) After that, wait 1 second for the page to
	      // load before moving on to the next step.
	      driver.findElement(By.id("source")).sendKeys(French);
	      Thread.sleep(1000);
	   }
	   
	   @Then("I check for {string} in English")
	   public void i_check_for_the_translation_in_english(String English) {
	      // Check if the results box contains the English phrase (supplied from the Cucumber scenario).
	      boolean result = driver.getPageSource().contains(English);
	      Assert.assertTrue("The French sentence translated to '"+English+"'", result);
	   }

	   @After()
	   public void closeBrowser() { 
	      // Close the browser when the tests are completed.
	      driver.quit();
	   }
}
