import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'

import Index from './pages/index'

import './app.scss'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index', // 首页
      'components/business/index', // 出差首页
      'components/business/record', // 出差记录
      'components/business/apply', // 出差申请
      'components/business/companies', // 同行人
      'components/notice/index', // 公告
      'components/address/detail', // 联系人详情
      'components/demo/calendar', // 营销日历demo
      'components/demo/time' // 生命周期演示
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'default'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
