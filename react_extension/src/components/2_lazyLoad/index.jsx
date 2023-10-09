import React, { Component ,lazy,Suspense} from 'react'
import {NavLink,Route} from 'react-router-dom'
import Loading from './Loading'
// import Home from './Home'
// import About from './About'
//懒加载引入方法：
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))


export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
            {/*     <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
                <NavLink to="/about" className="list-group-item">About</NavLink>
                <NavLink to="/home" className="list-group-item">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    <Suspense fallback={<Loading/>}>
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} /> 
                    </Suspense>
                        
                </div>
              </div>
            </div>
          </div> 
      </div>
    )
  }
}
