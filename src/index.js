// index.js就是react项目的入口文件(文件名字不能变)

// 1、引入核心模块
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// 2、把对应的内容渲染到id为root的标签上

// ReactDOM.render(参数1, 参数2)
// 参数1：作为root内部内容，如：React.createElement("div", null, "我是文本")
// 参数2：渲染到public/index.html id为root的标签
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
