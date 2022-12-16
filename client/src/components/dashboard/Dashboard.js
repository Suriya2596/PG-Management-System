import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { startBuildingList } from "../../reduxStore/actions/buildingsAction"
import { startUserAccount } from "../../reduxStore/actions/usersAction"

const Dashboard = (props)=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( startUserAccount() )
    },[])
    const user = useSelector((state)=>{
        return state.users
    })
    return (
        <div>
            <h2>Dash board {user.userName}</h2>
        </div>
    )
}

export default Dashboard