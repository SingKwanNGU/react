import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  //标识鼠标移入和移出状态
  state={mouse:false}

  //鼠标移入、移除的回调
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})

    }

  }

  //勾选、取消勾选的一个todo的回调
  handleCheck=(id)=>{
    return (e)=>{
      this.props.updateTodo(id,e.target.checked)
    }
  }

  //删除按钮点击时间的回调
  handleDelete=(id)=>{
    return ()=>{
      if(window.confirm('确定删除嘛？')){
        this.props.deleteTodo(id)
      }else return
    }
  }

  render() {
    const {id,name,done}=this.props
    const {mouse}=this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
