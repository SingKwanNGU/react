import React, { Component } from 'react'
import QueryString from 'query-string'

const DetailData=[
    {id:'01',content:'我爱你，中国'},
    {id:'02',content:'你好，现在的自己'},
    {id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
  render() {
    //接收params参数
    // const {id,title}=this.props.match.params

    //接收search参数
    const {search}=this.props.location
    const {id,title}=QueryString.parse(search.slice(1))

    const findResult=DetailData.find(item=>item.id===id)
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    )
  }
}
