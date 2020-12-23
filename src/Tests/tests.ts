// todo переделать систему именования
interface Test {
  link: string
  title: string
  apiLink: string
}

export const tests: Array<Test> = [
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
