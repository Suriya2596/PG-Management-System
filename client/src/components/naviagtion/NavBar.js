import React from "react"
import { Route,Link } from "react-router-dom"

import Home from "./Home"
import Dashboard from "../dashboard/Dashboard"
import Buildings from "../buildings/Buildings"
import Rooms from "../rooms/Rooms"
import Tenants from "../tenants/Tenants"
import Expenses from "../expenses/Expenses"
import UserRegister from "./UserRegister"

const NavBar = (props)=>{
    return (
        <div>
            <h2>NavBar</h2>
            
            <Route path={"/"} component={ localStorage.getItem("tokenPG") ? Dashboard : Home } exact/>
            <Route  path={"/register"} component={UserRegister} exact />
        </div>
    )
}

export default NavBar