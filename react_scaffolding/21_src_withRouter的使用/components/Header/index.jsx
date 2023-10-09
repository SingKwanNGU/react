import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

  
  forward=()=>{
    this.props.history.goForward()
  }

  back=()=>{
    this.props.history.goBack()
  }

  go=()=>{
    this.props.history.go(1)
  }

  render() {
    console.log('一般Header接收到的值是:',this.props);
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.forward}>前进</button>&nbsp;
          <button onClick={this.back}>后退</button>&nbsp;
          <button onClick={this.go}>go</button>&nbsp;
        </div>

    )
  }
}

export default withRouter(Header)
//withRouter可以加工一般组件，使其拥有路由组件所特有的属性和API。也可以理解为将一般组件变为路由组件。
//withRouter的返回值是一个新组件。