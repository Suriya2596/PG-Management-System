import axios from "axios"

export const startBuildingCreate = (requestData, resolve) => {
    return (dispatch) => {
        axios.post("http://localhost:3500/api/user/building", requestData, {
            headers: { "Authorization": localStorage.getItem("tokenPG") }
        })
            .then((response) => {
                const buildingData = response.data
                if (buildingData.hasOwnProperty("errors")) {
                    window.alert(buildingData.message)
                } else {
                    window.alert("added")
                    dispatch(buildingCreate(buildingData))
                    resolve()
                }
            })
    }
}
const buildingCreate = (data) => {
    return {
        type: "BUILDING_CREATE",
        payload: data
    }
}

export const startBuildingList = () => {
    return async (dispatch) => {
        // axios.get("http://localhost:3500/api/user/building",{
        //     headers:{"Authorization":localStorage.getItem("tokenPG")}
        // })
        //     .then((response)=>{
        //         const buildingData = response.data
        //         if(buildingData.hasOwnProperty("errors")){
        //             window.alert(buildingData.message)
        //         }else{
        //             dispatch( buildingList(buildingData) )
        //         }
        //     })
        //     .catch((err)=>{
        //         window.alert(`Building list : ${err.message}`)
        //     })
        try {
            const response = await axios.get("http://localhost:3500/api/user/building", {
                headers: { "Authorization": localStorage.getItem("tokenPG") }
            })
            const buildingData = response.data
            if (buildingData.hasOwnProperty("errors")) {
                window.alert(buildingData.message)
            } else {
                dispatch(buildingList(buildingData))
            }
        } catch (err) {
            window.alert(`Building list : ${err.message}`)
        }
    }
}
const buildingList = (data) => {
    return {
        type: "BUILDING_LIST",
        payload: data
    }
}

export const startBuildingUpdate = (requestData,_id,resolve)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3500/api/user/building/${_id}`,requestData ,{
            headers:{
                "Authorization":localStorage.getItem("tokenPG")
            }
        })
            .then((response)=>{
                const buildingData = response.data
                if (buildingData.hasOwnProperty("errors")) {
                    window.alert(buildingData.message)
                } else {
                    dispatch(buildingUpdate(buildingData))
                    resolve()
                }
            })
    }
}
const buildingUpdate = (data)=>{
    return {
        type:"BUILDING_UPDATE",
        payload:data
    }
}

export const startBuildingDestroy = (_id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3500/api/user/building/${_id}`,{
            headers:{
                "Authorization":localStorage.getItem("tokenPG")
            }
        })
        .then((response)=>{
            const buildingData = response.data
            if(buildingData.hasOwnProperty("error")){
                window.alert(buildingData.message)
            }else if(response.status===200){
                dispatch(buildingDestroy(buildingData))
            }
        })
        .catch((err)=>{
            window.alert(`building Delete ${err.message}`)
        })
    }
}
const buildingDestroy = (data)=>{
    return {
        type:"BUILDING_DESTROY",
        payload:data
    }
}

export const startBuildingLogout = () => {
    return {
        type: "LOGOUT"
    }
}