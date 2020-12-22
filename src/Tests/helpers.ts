import { Builder, By, until, Capabilities } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

export async function beforeTest() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ["--test-type", "--incognito", "--disable-gpu", "--headless", "--no-sandbox"],
  };
  chromeCapabilities.set("chromeOptions", chromeOptions);

  const hostname = "https://zakupka.com/";

  let driver = new Builder().forBrowser("chrome").withCapabilities(chromeCapabilities).build();
  await driver.manage().window().setRect({ x: 0, y: 0, width: 1600, height: 1200 });
  await driver.get(hostname);

  return driver
}

export async function afterTest(driver:Driver) {
  await driver.close();
}

export async function clickToLogin(driver: Driver, login: string, password: string) {
  driver.findElement(By.css(".lnk_login.auth__link")).click();
  await driver.wait(until.urlContains("login"), 3000);

  driver.findElement(By.css("[name='login'] + input")).sendKeys(login);
  await driver.sleep(1 * 1000);
  driver.findElement(By.css("[name='pass']")).sendKeys(password);
  await driver.sleep(1 * 1000);
  driver.findElement(By.css(".btn_login")).click();
}