import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
        <NavLink className="list-group-item" {...this.props} >{this.props.children}</NavLink>
        // <NavLink className="list-group-item" {...this.props} />两种写法都行
    )
  }
}
