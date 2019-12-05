import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logoImg from '../../assets/logo.png'
import { formatTime } from '../../utils/util'

// 1.封装一个 Time 组件
export default class Time extends Component {
  constructor(props) {
    super(props)
    // 3.为类添加局部状态
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {
  }

  // 4.挂载组件完成中添加定时器来更新组件局部状态
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  // 5.在卸载组件中移除定时器
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  config = {
    navigationBarTitleText: '生命周期演示页'
  }

  // 更新组件局部状态
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <View className='page page-index'>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='widthFix' />
        </View>
        <View className='page-title'>当前时间</View>
        <View className='page-title time'>{formatTime(this.state.date)}</View>
        <View className='page-title'>营销日历@小马宋</View>
        <View className='page-title'>作者 by Javen</View>
        <View className='page-title'>https://gitee.com/javen205</View>
      </View>
    )
  }
}