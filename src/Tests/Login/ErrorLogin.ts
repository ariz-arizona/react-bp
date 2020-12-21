import { By, until } from "selenium-webdriver";
import { afterTest, beforeTest, clickToLogin } from "Tests/helpers";

export default async function ErrorLogin() {
  const driver = await beforeTest();
  try {
    await clickToLogin(driver, "testovtest545@gmail.com", "125resrsers");
    await driver.wait(until.elementLocated(By.css(".msg")), 5000);
    const screenshot = await driver.takeScreenshot();
    await afterTest(driver);

    return {
      status: 'success',
      data: screenshot
    }
  } catch (err) {
    return {
      status: 'error',
      data: 'error login'
    }
  }
}