import React, { Component } from "react";
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {

  //初始化状态,users初始值为数值。
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
    
  }

  //更新state方法
  updateAppState=(stateObj)=>{
    this.setState(stateObj)
  }
  


  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>     
      </div>
    );
  }
}
