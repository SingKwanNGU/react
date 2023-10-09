/*
    该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers,用于汇总多个reducers
import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from "./count";
//引入为person组件服务的reducer
import personReducer from './person'


//汇总所有的reducer，整合为一个总的reducer对象
export default combineReducers({
    count:countReducer,
    persons:personReducer
})
