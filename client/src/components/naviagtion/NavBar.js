import React, { useState, useEffect } from "react"
import { Route, Link, withRouter, Switch } from "react-router-dom"

import PrivateRouter from "./PrivateRouter"
import Home from "./Home"
import Dashboard from "../dashboard/Dashboard"
import Buildings from "../buildings/Buildings"
import Rooms from "../rooms/Rooms"
import Tenants from "../tenants/Tenants"
import Expenses from "../expenses/Expenses"
import UserRegister from "./UserRegister"
import UserLogin from "./UserLogin"
import NotFound from "./NotFound"


const NavBar = (props) => {
    const [isLoggedin, setIsLoggedIn] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("tokenPG")) {
            handleIsLoggedIn()
        }
    }, [])
    const handleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedin)
    }
    return (
        <>
            {
                isLoggedin && (
                    <div>
                        <Link to="/">Dashboard</Link>
                        <Link to="/buildings">Buildings</Link>
                        <Link to="/" onClick={() => {
                            localStorage.clear()
                            handleIsLoggedIn()
                            props.history.push("/")
                        }}>Logout</Link>
                    </div>
                )
            }



            <Switch>
                <Route path={"/"} render={(props) => {
                    return <Home {...props} handleIsLoggedIn={handleIsLoggedIn} />
                }} exact />

                <Route path={"/register"} component={UserRegister} exact />

                <PrivateRouter path={"/buildings"} component={Buildings} />

                <Route path="*" component={NotFound}/>
            </Switch>

        </>
    )
}

export default withRouter(NavBar)