import { until } from "selenium-webdriver";
import { afterTest, beforeTest, clickToLogin } from "Tests/helpers";

export default async function CompanyLogin() {
  const driver = await beforeTest();
  try {
    await clickToLogin(driver, "montaronkb3@gmail.com", "111333");
    await driver.wait(until.urlContains("cabinet"), 5000);
    const screenshot = await driver.takeScreenshot();
    await afterTest(driver);

    return {
      status: 'success',
      data: 'data:image/png;base64,' + screenshot
    }
  } catch (err) {
    return {
      status: 'error',
      data: 'error login'
    }
  }
}