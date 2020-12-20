const { Builder, By, until, Capabilities } = require("selenium-webdriver");

const chromeCapabilities = Capabilities.chrome();
const chromeOptions = {
  args: ["--test-type", "--incognito", "--disable-gpu"],
};
chromeCapabilities.set("chromeOptions", chromeOptions);

const hostname = "https://zakupka.com/";

let driver: any;

async function clickToLogin(login: string, password: string) {
  driver.findElement(By.css(".lnk_login.auth__link")).click();
  await driver.wait(until.urlContains("login"), 3000);

  driver.findElement(By.css("[name='login'] + input")).sendKeys(login);
  await driver.sleep(1 * 1000);
  driver.findElement(By.css("[name='pass']")).sendKeys(password);
  await driver.sleep(1 * 1000);
  driver.findElement(By.css(".btn_login")).click();
}

export default async function ErrorLogin() {
  driver = new Builder().forBrowser("chrome").withCapabilities(chromeCapabilities).build();
  await driver.manage().window().setRect({ x: 0, y: 0, width: 1600, height: 1600 });
  await driver.get(hostname);
  try {
    await clickToLogin("testovtest545@gmail.com", "125resrsers");
    await driver.wait(until.elementLocated(By.css(".msg")), 5000);
    const screenshot = await driver.takeScreenshot();

    return {
      type: 'success',
      data: screenshot
    }
  } catch (err) {
    return {
      type: 'error',
      data: 'error login'
    }
  }

}