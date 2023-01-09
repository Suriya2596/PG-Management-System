import axios from "axios"

export const startRoomsCreate = (resquestData,resolve)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3500/api/user/room",resquestData,{
            headers:{
                "Authorization" : localStorage.getItem("tokenPG")
            }
        })
        .then((response)=>{
            const roomData = response.data
            if(roomData.hasOwnProperty("errors")){
                window.alert(`Error : ${roomData.message}`)
            }else if(response.status===200){
                dispatch(roomsCreate(roomData))
                resolve()
            }else{
                window.alert(`Error : ${roomData.message}`)
            }
        })
        .catch((err)=>{
            window.alert(`Error : ${err.message}`)
        })
    }
}
const roomsCreate = (data)=>{
    return {
        type:"ROOM_CREATE",
        payload:data
    }
}

export const startRoomList = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3500/api/user/room",{
            headers:{
                "Authorization" : localStorage.getItem("tokenPG")
            }
        })
            .then((response)=>{
                const roomsData = response.data
                if(roomsData.hasOwnProperty("error")){
                    window.alert(`Error : ${roomsData.message}`)
                }else if(response.status===200){
                    dispatch( roomList(roomsData) )
                }else{
                    window.alert(`Error : ${roomsData.message}`)
                }
            })
            .catch((err)=>{
                window.alert(`Error : ${err.message}`)
            })
    }
}
const roomList = (data)=>{
    return {
        type:"ROOM_LIST",
        payload:data
    }
}