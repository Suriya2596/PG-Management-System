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
            }else{
                window.alert(`Error : ${roomData.message}`)
            }
        })
    }
}
const roomsCreate = (data)=>{
    return {
        type:"ROOM_CREATE",
        payload:data
    }
}