import React, { Component } from 'react'

export default class Demo extends Component {

    state={count:0}

/*  对象式的setState   
    add=()=>{
        const {count}=this.state
        this.setState({count:count+1},()=>{
            console.log("10行的输出:",this.state.count);//此回调所调用的时间是setState更新和页面render更新完毕后才调用
        })//setState是一个同步的方法，但是setState()引起的state的更新是异步的，
        因为每次调用setState都会触发更新，异步操作是为了提高性能，将多个状态合并一起更新，减少render调用。
    }
 */

    add=()=>{
        // 函数式式的setState
        this.setState(state=>({count:state.count+1}))
    }

 


  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
