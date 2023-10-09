import React, { useState,useEffect,useRef} from 'react'
// import ReactDOM from 'react-dom'
import {root} from '../../index'

// 类式组件写法： 
/* class Demo extends React.Component {

    state={count:0}

    myRef=React.createRef()

    add=()=>{
        // 函数式式的setState
        this.setState(state=>({count:state.count+1}))
    }

    show=()=>{
        alert(this.myRef.current.value)
    }

    unmount=()=>{
        //旧版写法：
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        //新版写法：
        root.unmount();
    }

    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState(state=>({count:state.count+1}))
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }


  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>删除</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
} */

//函数式组件写法：
function Demo(){

    const [count,setCount]=useState(0)
    const [name,setName]=useState('tom')
    const myRef=useRef(null)

    function add(){
        // setCount(count+1) 第一种写法
        setCount(count=>count+1) //第二种写法
    }

    function changeName(){
        // setName('jerry')
        setName( name =>'jerry')
    }

    function unmount(){
        root.unmount();  
    }

    function show(){
        alert(myRef.current.value)
    }

    //这个方法相当于是componentDidMount和compoentWillUpdata和componentWillUnmount的三者结合
    useEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])
    
    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <h2>我的名字是：{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}

export default Demo