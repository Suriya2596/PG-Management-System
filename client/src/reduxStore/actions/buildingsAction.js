import axios from "axios"

export const startBuildingCreate = (requestData,resolve)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3500/api/user/building",requestData,{
            headers:{"Authorization":localStorage.getItem("tokenPG")}
        })
            .then((response)=>{
                const buildingData = response.data
                if(buildingData.hasOwnProperty("errors")){
                    window.alert(buildingData.message)
                }else{
                    window.alert("added")
                    dispatch( buildingCreate(buildingData) )
                    resolve()
                }
            })
    }
}
const buildingCreate = (data)=>{
    return {
        type:"BUILDING_CREATE",
        payload:data
    }
}

export const startBuildingList = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3500/api/user/building",{
            headers:{"Authorization":localStorage.getItem("tokenPG")}
        })
            .then((response)=>{
                const buildingData = response.data
                if(buildingData.hasOwnProperty("errors")){
                    window.alert(buildingData.message)
                }else{
                    dispatch( buildingList(buildingData) )
                }
            })
            .catch((err)=>{
                window.alert(`Building list : ${err.message}`)
            })
    }
}
const buildingList = (data)=>{
    return {
        type:"BUILDING_LIST",
        payload:data
    }
}


export const startBuildingLogout = ()=>{
    return {
        type:"LOGOUT"
    }
}