import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends Component {
    //一般状态在哪里，操作状态的方法就在哪里，比如todoList案例的状态在父组件App这里，那么操作状态的方法addTodo、updateTodo也在父组件App上

    //初始化状态
    state={todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'敲代码',done:false},
        {id:'004',name:'逛街',done:true}
    ]}

    //addTodo用于添加一个todo,接收的参数是todo对象，给Header子组件调用来实现状态的增加
    addTodo=(todoObj)=>{
        //获取原todos
        const {todos}=this.state;
        //添加一个todo
        const newTodos=[todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos});
    }

    //updateTodo用于更新一个todo对象，给List子组件调用来实现状态的更新，List又传给其子组件Item来实现具体某一个todo项的done进行更新。
    updateTodo=(id,done)=>{
        //获取原todos
        const {todos}=this.state
        //遍历数组找到与传入id相同的todo项进行done修改
        const newsTodos=todos.map(todoObj=>{
            //如果todo项的id与传入id相同，复制一份todoObj,并修改其done值，由于（...todoObj,done:done）done属性名和done属性值相同，可以简写成属性名done
            if(todoObj.id===id) return {...todoObj,done}
            else return todoObj
        })

        this.setState({todos:newsTodos})
    }

    //deleteTodo用于删除一个todo对象，给List子组件调用来实现状态的更新。
    deleteTodo=(id)=>{
        //获取原todos
        const {todos}=this.state
        //遍历数组找到与传入id相同的todo项进行删除
        const newsTodos=todos.filter(todoObj=>todoObj.id!==id)
        this.setState({todos:newsTodos})
    }

    //checkAllTodo用于修改所有todo对象的done值
    checkAllTodo=(done)=>{
        //获取原todos
        const {todos}=this.state
        //数据处理
        const newTodos=todos.map((todoObj)=>{
            return {...todoObj,done}
        })

        //更新状态
        this.setState({todos:newTodos})
    }

    //clearAllDone用于删除所有done值为true的todo对象
    clearAllDone=()=>{
        //获取原todos
        const {todos}=this.state
        //数据处理
        const newTodos=todos.filter((todoObj)=>!todoObj.done)

        //更新状态
        this.setState({todos:newTodos})
    }

    render() {
        const {todos}=this.state;
        return (
            <div className="todo-container">
            <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} cheackAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
            </div>
        </div>
        )
    }
}
