import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

    state={carName:'奔驰C63'}


    changeCar=()=>{
        this.setState({carName:'迈巴赫'})
    }

    //PureComponent实现的方法是：比较地址值，如果前后状态的地址值没改变，组件也不会重新渲染，当然也不会更新页面了

   /*  shouldComponentUpdate(nextProps, nextState){
        console.log(this.props,this.state);//当前的props和state
        console.log(nextProps,nextState);//接下来要变化的props和state
        return !this.state.carName === nextState.carName
        // if(this.state.carName === nextState.carName) return false
        // else return true
    } */

  render() {
    console.log('parent--render');
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{this.state.carName}</span><br/>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={this.state.carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {



  /*   shouldComponentUpdate(nextProps, nextState){
        console.log(this.props,this.state);//当前的props和state
        console.log(nextProps,nextState);//接下来要变化的props和state
        return !this.props.carName===nextProps.carName
        // if(this.props.carName === nextProps.carName) return false
        // else return true
    } */


    render() {
        console.log('child--render');
      return (
        <div className='child'>
            <h3>我是Child组件</h3>
            <span>我从Parent里拿到的车名字是:{this.props.carName}</span><br/>
        </div>
      )
    }
}
