import { Navigate } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Message from "../pages/Message"
import News from "../pages/News"



const routes=[
    {path:'/home',
    element:<Home/>,
    children:[
      {path:'message',
      element:<Message/>,
      },
      {path:'news',
      element:<News/>}
    ]},
    {path:'/about',
    element:<About/>},
    {path:'/' ,
    element:<Navigate  to="/about" />}
  ]

export default routes