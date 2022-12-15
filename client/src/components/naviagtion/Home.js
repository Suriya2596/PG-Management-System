import React from "react"
import { withRouter } from "react-router-dom"
import { Grid,spacing } from "@mui/material"
import loginImg from "../../asstes/images/login.png"
import Dashboard from "../dashboard/Dashboard"
import UserLogin from "./UserLogin"
import "../../asstes/css/home.css"


const Home = (props) => {
    const { handleIsLoggedIn } = props
    return (
        <>
            {
                localStorage.getItem("tokenPG") ? (
                    <>
                        <Dashboard />
                    </>
                ) : (
                    <Grid container spacing={2} className="login-container" >
                        <Grid item xs={12} md={6} className="login-sub-conatiner">
                            <h3>PG Management System</h3>
                            <img src={loginImg} alt="loginImg" width={"400px"} height={"auto"} />
                            <p className="about-app">
                                By using Pg management app , you can add your buildings , 
                                tenant&#8216;s details and rent ,update expense of building so can view income&#8216;s of buildings.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={6} className="login-sub-conatiner">
                            <UserLogin {...props} />
                        </Grid>
                    </Grid>
                )
            }
        </>
    )
}

export default withRouter(Home)