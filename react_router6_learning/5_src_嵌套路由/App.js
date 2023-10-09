import React from 'react';
import { NavLink,useRoutes} from 'react-router-dom';
import routes from './routes'

function App() {
  const element=useRoutes(routes)
  
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 编写路由连接 */}

            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 caseSensitive默认返回值为false 如果添加进Route中，就会开始区分大小写。  */}
              {/* <Routes>
                <Route path="/about" caseSensitive element={<About/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Navigate  to="/about"/>} />
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
