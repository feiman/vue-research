/**
 * Created by linxiaojie on 2017/4/20.
 *
 * 注册所有template模版为Vue组件
 */
import {util} from 'liljay-common-utils'
import Units from '../components/unit/index.js'
let Vue

let Tpl = {}
Tpl.install = (_Vue) => {
  if (Vue) {
    console.error(
      '[Tpl] already installed. Vue.use(Tpl) should be called only once.'
    )
    return
  }
  util.each(Units, (val, key) => {
    _Vue.component(key, val)
  })
  Vue = _Vue
}

export default Tpl
