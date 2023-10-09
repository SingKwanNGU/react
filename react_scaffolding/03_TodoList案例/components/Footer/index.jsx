import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

  static propTypes={
    todos:PropTypes.array.isRequired,
  }


  //全选checkBox的回调
  handeleCheckAll=(e)=>{
    this.props.checkAllTodo(e.target.checked)
  }

  //清楚所有已完成todo对象项的回调
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }

  render() {
    const { todos ,checkAllTodo} = this.props
    const doneCount=todos.filter(item=>item.done).length
    const total=todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handeleCheckAll} checked={doneCount===total && total !==0 ?true:false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
