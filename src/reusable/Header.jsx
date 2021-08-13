import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const [token,setToken]=useState()
    useEffect(()=>{
        const token=localStorage.getItem("token")
        setToken(token)
    },[])
    return (
        <>
            <div className="header">
    <div className="mid-contents">
    
         <img className="img" src="/assets/logo.png" alt=""/>
 
    <div className="header-menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            {token === null ? (<> <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li> </>) : (<> <li><Link to="/workcull">Dashboard</Link></li>  </>)}
        </ul>
    </div>
    </div>
</div>
        </>
    )
}

export default Header
