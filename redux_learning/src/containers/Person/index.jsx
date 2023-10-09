import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import {connect} from 'react-redux'
import { addPerson } from '../../redux/actions/person'


class Person extends Component {

  addPerson = ()=>{
    let name = this.nameNode.value
    let age = this.ageNode.value
    const person={id:nanoid(),name,age}
    this.props.add(person)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h2>上方组件的求和为：{this.props.count}</h2>
        <input ref={c=>this.nameNode=c} type="text" placeholder='输入名字' />
        <input ref={c=>this.ageNode=c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.personArr.map(p=>{
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state=>({personArr:state.persons,count:state.count}),
  {add:addPerson}
)(Person)
