import React, { Component } from "react";

//引入actionCreator
import {
  Increment,
  Decrement,
  IncrementAsync,
} from "../../redux/actions/count";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

/* 映射状态
function mapStateToProps(state){
    return {count:state}
} */
//优化写法：
// const mapStateToProps=state=>({count:state})

/* 映射操作状态的方法
function mapDispatchToProps(dispatch){
    //通知redux执行加法
    return {
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        asyncJia:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
} */
//优化写法：
// const mapDispatchToProps=dispatch=>({
//         jia:(number)=>dispatch(createIncrementAction(number)),
//         jian:(number)=>dispatch(createDecrementAction(number)),
//         asyncJia:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
// })

//定义UI组件
class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.add(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.minus(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.addAsync(value * 1, 500);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为:{this.props.count},下方组件的人数为:{this.props.personsLength}</h4>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>&nbsp;
      </div>
    );
  }
}

//使用connetct()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
//优化写法1：
export default connect(
  (state) => ({ count: state.count,personsLength:state.persons.length }),
  /*mapDispatchToProps的一般写法 
    dispatch=>({
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        asyncJia:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }) */

  //mapDispatchToProps的简写

  {
    add: Increment,
    minus: Decrement,
    addAsync: IncrementAsync,
  }
)(Count);
