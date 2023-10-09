//引入Count的UI组件
import CountUI from '../../components/Count'
//引入actionCreator
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action_creator'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


/* 
    1.mapStateToProps函数返回的是一个对象
    2.返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value————状态
    3.mapStateToProps用于传递状态
 */
function mapStateToProps(state){
    return {count:state}
}

/* 
    1.mapDispatchToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value————操作状态的方法
    3.mapStateToProps用于传递操作状态的方法
*/

function mapDispatchToProps(dispatch){
    //通知redux执行加法
    return {
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        asyncJia:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}

//使用connetct()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)