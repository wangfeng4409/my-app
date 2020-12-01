import React, { Component } from 'react'

class Son extends Component {
  // 给props属性添加默认值
  static defaultProps = {
    bgc: 'green',
    title: '直系son'
  }
  render() {
    return (
      <div style={{ width: "200px", height: 40, lineHeight: "40px", backgroundColor: this.props.bgc }}>
        {/* this.props 要获取调用这个组件的时候的标签属性 */}
        { this.props.title }
        {/* 特殊写法：专门获取子组件被调用的时候,写成双标签时,标签中的子元素 */}
        { this.props.children }
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '我是son1'
    }
  }

  render() {
    return (
      <div>
        <Son bgc="pink" />
        <Son title={ this.state.title } bgc="blue" />
        <Son title="我是son2" />
        <Son title="我是son3">子元素</Son>
      </div>
    )
  }
}


