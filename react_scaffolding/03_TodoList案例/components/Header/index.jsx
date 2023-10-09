import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  //对接收的props：进行类型、必要性的限制。传入的类型必需是函数，且必需要传。
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  //键盘事件的回调
  handleKeyUp = (e) => {
      //判断是否按下回车键
    if (e.key !== 'Enter') return 
      //判断输入内容是否为空
    if(e.target.value.trim() === ''){
      alert('输入内容不能为空') 
      return
    } 
    //封装一个todo对象
    const todoObj={id:nanoid(),name:e.target.value,done:false}
    //将封装好的todo对象传回给父组件App
    this.props.addTodo(todoObj)
    //清空输入框
    e.target.value = ''
  }


  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
