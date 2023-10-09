import React, { Component,createContext } from 'react'

//创建context对象
const MyContext=createContext()
const {Provider,Consumer} = MyContext
export default class A extends Component {

    state={username:'tom',age:18}

  render() {
    const {username,age}=this.state
    return (
      <div>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}</h4>
        {/* Provider可以接收多个键值对，对象也可以。 */}
        <Provider value={{username,age}}>
            <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
    render() {
        //对比组件C,因为没有声明接收context，所以获取不了context的内容，只能返回一个空对象，
        // 而且A与B是父子关系，用props就可以进行传值，没必要用context,context用于祖组件和后代组件通信（隔代通信）
        console.log(this.context);
      return (
        <div>
            <h3>我是B组件</h3>
            <h4>我从A组件接收到的用户名是:{this.props.username}</h4>
            <C/>
        </div>
      )
    }
}

//类式组件写法：
/* class C extends Component {
    //声明接收context，不然获取不了。
    static contextType=MyContext
    render() {
      console.log(this.context);
      const {age,username}=this.context
      return (
        <div>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是:{username},年龄是：{age}</h4>
           
        </div>
      )
    }
} */


//函数式组件写法：
function C(){
   return (
        <div>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是:
                <Consumer>
                    {
                        value =>{
                            console.log(value);
                            return `${value.username},年龄是：${value.age}`
                        }
                    }
                </Consumer>
            </h4>
           
        </div>
    )  
    
}



