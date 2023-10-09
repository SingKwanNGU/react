import React, { Component } from 'react'

export default class Child extends Component {

    state={
       users:[
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jerry',age:19},
        {id:'003',name:'jack',age:20},
       ]
    }
    // state='abc'

  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
            this.state.users.map(userobj=>{
                return <h4 key={userobj.id}>{userobj.name}----{userobj.age}</h4>
            })
        }
      </div>
    )
  }
}
