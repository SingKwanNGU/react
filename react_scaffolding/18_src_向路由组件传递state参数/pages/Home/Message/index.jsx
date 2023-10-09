import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }


  render() {
    return (
        <div>
             <ul>
                
                {this.state.messageArr.map((msgObj)=>{
                         return (
                            <li key={msgObj.id}>
                                
                                {/* 向路由组件传递search参数
                                 <Link to={`/home/message/detail/?id=${msgObj.id}&title${msgObj.title}`} >{msgObj.title}</Link>&nbsp;&nbsp; */}
                                {/* 向路由组件传递state参数*/}
                                <Link to={{pathname:"/home/message/detail",state:{id:msgObj.id,title:msgObj.title} }}>{msgObj.title}</Link>
                            </li>
                        )
                    })
                }
                
            </ul>
            <Route path="/home/message/detail" component={Detail} />
        </div>
       
    )
  }
}
