'use strict';

import React from 'react';
import {
  StyleSheet
} from 'react-native';
//添加路由组件
import Navigation from 'react-navigation';

//添加展示用的首页
import Home from './home/index'

//创建路由
const Pages = Navigation.StackNavigator({
  'Home': {
    screen: Home
  }
}, {
  //这里做了一个页面跳转的动画
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      //设置页面跳转的动画
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      });
      return { opacity, transform: [{ translateX }] };
    }
  }),
  navigationOptions: {
    header: null
  }
});

//创建一个自己的容器,方便以后对路由做一些处理
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Pages onNavigationStateChange={this.listenChange.bind(this)}></Pages>;
  }
  //监听路由的跳转
  listenChange(state1, state2, action) {

  }
}