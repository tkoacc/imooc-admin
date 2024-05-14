import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/lib/locale/lang/en'
// import store from '@/store'

export default (app) => {
  // app.use(ElementPlus, {
  //   locale: store.getters.language === 'en' ? en : zhCn
  // })
  app.use(ElementPlus)
}
const _ = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ {
  constructor(callback) {
    callback = debounce(callback, 20)
    super(callback)
  }
}

const debounce = (callback, delay) => {
  let tid
  return function () {
    const ctx = self
    tid && clearTimeout(tid)
    tid = setTimeout(() => {
      callback.apply(ctx, arguments)
    }, delay)
  }
}
