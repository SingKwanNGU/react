/*
    1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
    2.reducer函数会接收到两个参数，分别为 之前的状态(previousState),动作对象(action)
*/ 

const initState=0
export default function countReducer(previousState=initState,action){
    console.log(previousState);
    //从action对象中获取type和data
    const {type,data}=action
    //根据type决定如何处理数据
    switch (type) {
        case 'increment':
            return previousState + data
        case 'decrement':
            return previousState - data    
    
        default:
            return previousState
    }
}