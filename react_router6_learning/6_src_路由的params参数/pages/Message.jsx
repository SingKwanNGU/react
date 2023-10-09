import React,{useState} from 'react'
import { Link,Outlet } from 'react-router-dom'



export default function Message() {
    const [messages]=useState([
        {id:1,title:'消息1',content:'锄禾日当午'},
        {id:2,title:'消息2',content:'汗滴禾下土'},
        {id:3,title:'消息3',content:'谁知盘中餐'},
        {id:4,title:'消息4',content:'粒粒皆辛苦'},
    ])
  return (
    <div>
        <ul>
            {
                messages.map((m)=>{
                    return (
                        <li key={m.id}>
                            {/* 路由连接 */}
                            <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <hr/>
        {/* 指定路由组件的展示位置 */}
        <Outlet />
    </div>
  )
}
