import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async()=>{
    //获取用户的输入（连续解构赋值写法）
    const {keyWordElement:{value:keyWord}}=this
    //发送网络请求List更新状态
    PubSub.publish('searchState',{isFirst:false,isLoading:true})
    //#region  发送网络请求--使用axios发送
   /*  axios.get(`/api1/search/users?q=${keyWord}`).then(
        response =>{
          //请求成功后通知List更新状态
          PubSub.publish('searchState',{isLoading:false,users:response.data.items})
          // this.props.updateAppState({isLoading:false,users:response.data.items})
        }, 
        error => {
          //请求失败通知List更新状态
          PubSub.publish('searchState',{isLoading:false,err:error.message})
          // this.props.updateAppState({isLoading:false,err:error.message})
        },
    ) */
    //#endregion
    
    // 发送网络请求--使用fetch发送（未优化）
   /*  fetch(`/api1/search/users2?q=${keyWord}`).then(
      res =>{
        console.log('联系服务器成功了');
        return res.json()
      }
    ).then(
      res => {
        console.log('获取数据成功了',res);
      }
    ).catch(
      (err)=>{console.log(err);}
    ) */


    // 发送网络请求--使用fetch发送（优化）
    try {
      const res=await fetch(`/api1/search/users2?q=${keyWord}`)
      const data=await res.json()
      PubSub.publish('searchState',{isLoading:false,users:data.items})
      console.log(data);
    } catch (error) {
      console.log('请求出错',error);
      PubSub.publish('searchState',{isLoading:false,err:error.message})
    }
  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
            &nbsp;<button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
