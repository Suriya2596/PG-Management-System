import React, { useEffect } from "react"
import {useDispatch} from "react-redux"
import { startUserAccount } from "./reduxStore/actions/usersAction"
import { startBuildingList } from "./reduxStore/actions/buildingsAction"
import NavBar from "./components/naviagtion/NavBar"
import "./asstes/css/App.css"

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem("tokenPG")){
      dispatch( startUserAccount() )
      dispatch( startBuildingList() )
    }
  },[])

  return (
      <>
        <NavBar />
      </>
  )
}

export default App