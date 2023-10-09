/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant";

/* function createIncrementAction(data){
    return {
        type:'increment',data
    }
} */

//上述简短写法：
export const Increment = (data) => ({ type: INCREMENT, data });

export const Decrement = (data) => ({ type: DECREMENT, data });
//所谓的异步action就是指action的返回值是个函数，而同步action的返回值是一个一般对象。
export const IncrementAsync = (data, time) => {
  //返回一个函数，该函数在time秒后执行store.dispatch(创建的action对象)，store会帮你调用此方法。然后在交给reducer执行。异步action不是必须要用的。
  //而如果返回的是一个一般对象，store会直接交给reducer执行。
  return (dispatch) => {
    setTimeout(() => {
      dispatch(Increment(data));
    }, time);
  };
};
