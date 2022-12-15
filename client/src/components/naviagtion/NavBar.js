import React,{useState,useEffect} from "react"
import { Route,Link, withRouter } from "react-router-dom"

import PrivateRouter from "./PrivateRouter"
import Home from "./Home"
import Dashboard from "../dashboard/Dashboard"
import Buildings from "../buildings/Buildings"
import Rooms from "../rooms/Rooms"
import Tenants from "../tenants/Tenants"
import Expenses from "../expenses/Expenses"
import UserRegister from "./UserRegister"
import UserLogin from "./UserLogin"


const NavBar = (props)=>{
    const [isLoggedin,setIsLoggedIn] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem("tokenPG")){
            handleIsLoggedIn()
        }
    },[])
    const handleIsLoggedIn = ()=>{
        setIsLoggedIn(!isLoggedin)
    }
    return (
        <div>
            <h2>NavBar</h2>
            {
                isLoggedin ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                    </>
                ) : (
                    <>
                        <Link to="/register">User Register</Link>
                        <Link to="/login">User Login</Link>
                    </>
                )
            }

            <Route path={"/"} component={ Home } exact/>
            <PrivateRouter path={"/dashboard"} component={Dashboard} exact/>

            <Route  path={"/register"} component={UserRegister} exact />
            <Route  path={"/login"} render={(props)=>{
                return <UserLogin {...props} handleIsLoggedIn={handleIsLoggedIn}/>
            }} exact/>

        </div>
    )
}

export default withRouter(NavBar)