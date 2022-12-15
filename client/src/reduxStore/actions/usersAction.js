import axios from "axios"

export const startUserRegister = (requestData)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3500/api/user/register",requestData)
            .then((response)=>{
                const userData = response.data
                console.log(userData)
                dispatch( userRegister(data) )
            })
            .catch((err)=>{
                window.alert(`Register errors : ${err.message}`)
            })
    }
}
const userRegister = (data)=>{
    return {
        type:"USER_REGISTER",
        payload:data
    }
}