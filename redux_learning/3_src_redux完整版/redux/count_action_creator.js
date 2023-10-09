/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT,DECREMENT } from "./constant";

/* function createIncrementAction(data){
    return {
        type:'increment',data
    }
} */

//上述简短写法：
export const createIncrementAction = (data)=>({type: INCREMENT,data})

export const createDecrementAction = (data)=>({type: DECREMENT,data})
