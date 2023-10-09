/*
   该文件专门用于暴露一个store对象,整个应用只有一个store对象，相当于一个全局变量对象。
*/ 
//引入createStore,专门用于创建redux中最为核心的store对象 目前该方法已弃用！！！
// import {createStore} from 'redux' 改为下面写法
import { legacy_createStore as createStore,applyMiddleware } from "redux";
//引入整合后的allReducer对象
import allReducers from "./reducers";
//引入thunk,用于支持异步action  新版的reduxjs/toolkit里面整合了redux-thunk
import thunk from "redux-thunk";
//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';


//暴露store  
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));



//官网教程写法
/* import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
}) */



