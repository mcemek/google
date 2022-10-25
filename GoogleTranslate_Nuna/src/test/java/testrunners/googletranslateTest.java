package testrunners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
      features="src/main/resources/",
      glue="googletranslate.steps",
      plugin = {"pretty", "html:target/SystemTestReports/report.html"})

public class googletranslateTest {

}
