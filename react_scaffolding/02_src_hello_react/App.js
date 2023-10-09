//引入react
import React ,{Component} from "react";
//引入子组件
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

//创建外壳组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}