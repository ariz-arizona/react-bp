// todo переделать систему именования
export interface TestInterface {
  link: string
  title: string
  apiLink: string
}

export const tests: Array<TestInterface> = [
  {
    link: 'error-login',
    title: 'Ошибочный логин',
    apiLink: 'ErrorLogin',
  },
  {
    link: 'company-login',
    title: 'Логин компании',
    apiLink: 'CompanyLogin',
  }
]
