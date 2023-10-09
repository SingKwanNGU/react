import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
// import Test from './pages/Test'
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
            {/*     <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
              
                <MyNavLink replace to="/home" >Home</MyNavLink>
                <MyNavLink replace to="/about" >About</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body"> 
                  <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/about" />
                  </Switch>
                </div>
              </div>
            </div>
          </div> 
      </div>
    )
  }
}
