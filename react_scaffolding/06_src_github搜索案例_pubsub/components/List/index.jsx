import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {


  //初始化状态
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
    
  }

  componentDidMount(){
    this.token=PubSub.subscribe('searchState',(_,stateObj)=>{
        this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }


  render() {
    const {users,isFirst,isLoading,err}=this.state
    return (
        <div className="row">
            {
                isFirst? <h2>Type to search users</h2> :
                isLoading? <h2>Loading...</h2> :
                err? <h2 style={{color:'red'}}>{err.message}</h2> :
                users.map((userObj) =>{
                    return (
                        <div key={userObj.id} className="card">
                            <a href={userObj.html_url} rel="noreferrer" target="_blank">
                                <img
                                alt=''
                                src={userObj.avatar_url}
                                style={{width: '100px'}}
                                />
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}
