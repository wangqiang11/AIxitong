import type { PayOptions } from './pay'

export class Alipay {
  init(name: string, pay: any) {
    pay[name] = this
  }
  run(options: PayOptions) {
    return new Promise((resolve, reject) => {
      if (process.client) {
          const html = options.config
          const alipayPage = window.open('', '_self')!
          alipayPage.document.write(html)
          alipayPage.document.forms[0].submit()
          reject()
      }
    })
  }
}
