import {Route,Redirect} from "react-router-dom"

const PrivateRouter = ({component:PrivateComponent,...reset})=>{
    return <Route  {...reset} render={(props)=>{
        return localStorage.getItem("tokenPG") ? <PrivateComponent {...props} /> : <Redirect to={{pathname:"/"}}/>
    }} />
}

export default PrivateRouter