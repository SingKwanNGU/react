import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate=useNavigate();



  return (
    <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={()=>navigate(-1)}>←后退</button>
            <button onClick={()=>navigate(1)}>前进→</button>
        </div>
    </div>
  )
}
