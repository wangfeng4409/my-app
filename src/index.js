// index.js就是react项目的入口文件(文件名字不能变)

// 1、引入核心模块
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App />,
  document.getElementById('root')
);
