import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

    <Provider store={store}>
        <App />
    </Provider>  
      
);

//监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
//如果使用了react-redux，则不用使用此监测了。react-redux的connect函数实现了此功能。
/* store.subscribe(()=>{
    root.render(
        <App />
    )
}) */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
