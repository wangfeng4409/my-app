import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link } from 'react-router'

// 引入对应的组件
import Index from './Index'
import List from './List'
import Details from './Details'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li><a href="#/app/index">首页</a></li>
          <li><a href="#/app/list">列表页</a></li>
          <li><a href="#/app/details/11">详情页</a></li> */}

          <li><Link to="/app/index">首页</Link></li>
          <li><Link to="/app/list">列表页</Link></li>
          <li><Link to="/app/details/11">详情页</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

// 定义一个路由
let routes = <Router history={browserHistory}>
  <Route path="/">
    {/* IndexRoute在保持/路径不变的情况下,设置默认展示页面 */}
    {/* <IndexRoute component={App} /> */}
    {/* 注意：IndexRoute可与IndexRedirect结合使用,也可以只使用IndexRedirect */}

    {/* IndexRedirect在访问/,直接重定向到 /app 所对应的视图 */}
    <IndexRedirect to="/app" />

    <Route path="/app" component={App}>
      {/* IndexRedirect在访问/app,直接重定向到 /app/index 所对应的视图 */}
      <IndexRedirect to="index" />
      {/* 相对路径的写法 */}
      <Route path="index" component={Index} />
      {/* 绝对路径的写法 */}
      <Route path="list" component={List} />
      {/* 路由传参 */}
      <Route path="details/:id" component={Details} />
    </Route>
  </Route>
</Router>

ReactDOM.render(routes,
  document.getElementById('root')
);
