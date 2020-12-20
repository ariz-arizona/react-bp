import { tests } from "./tests";

async function getTest(name: string) {
  if (tests.hasOwnProperty(name)) {
    const test: Function = tests[name];
    const result: Object = await test();
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
