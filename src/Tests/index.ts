import ErrorLogin from "./Login/ErrorLogin";
import CompanyLogin from "./Login/CompanyLogin";

import { tests } from "./tests";

// todo сделать объектом
const testModules:any = {
  ErrorLogin,
  CompanyLogin
}

async function getTest(name: string) {
  const test = tests.find(test => test.apiLink === name)
  if (test && testModules.hasOwnProperty(test.apiLink)) {
    const result = await testModules[test.apiLink]();
    return {
      name,
      result
    }
  } else {
    return {
      error: `no test name ${name}`,
    }
  }
}

export default getTest;
