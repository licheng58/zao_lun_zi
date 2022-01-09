import { createApp } from 'vue'
import App from './App.vue'
import Icon from './components/Lc-icon.vue'

/**
 * @Author licheng - h函数
 * @Description 第一个参数(标签类型) 第二个参数(标签属性) 第三个参数(子节点)
 * @return
 * @Date 2022-01-07
 */
// const imgSrc = require('./assets/logo.png') //eslint-disable-line
// import HelloWorld from './components/HelloWord.vue'
// const App = defineComponent({
//   render() {
//     return h('div', { id: 'app' }, [
//       h('img', { alt: 'Vue logo', src: imgSrc }),
//       h('HelloWorld', { msg: '哈哈哈' }),
//     ])
//   },
// })

const req = require.context('./assets/icons/svg', false, /\.svg$/)
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
requireAll(req)

createApp(App).component('Icon', Icon).mount('#app')
