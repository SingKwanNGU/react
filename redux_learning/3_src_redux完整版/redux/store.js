/*
   该文件专门用于暴露一个store对象,整个应用只有一个store对象，相当于一个全局变量对象。
*/ 
//引入createStore,专门用于创建redux中最为核心的store对象 目前该方法已弃用！！！
// import {createStore} from 'redux' 改为下面写法
import { legacy_createStore as createStore } from "redux";
//引入为Count组件服务的reducer
import countReducer from "./count_reducer";
//暴露store
export default createStore(countReducer);



//官网教程写法
/* import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
}) */



