import React, { Component } from 'react'

export default class Details extends Component {
  componentDidMount() {
    // 发起异步请求,请求id为this.props.routeParams.id的相关数据
    console.log(this.props.routeParams.id, 'id')
  }
  
  render() {
    return (
      <div>
        详情页
        <div>{this.props.routeParams.id}</div>
      </div>
    )
  }
}
