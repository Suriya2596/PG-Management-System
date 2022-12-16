import axios from "axios"

export const startUserRegister = (requestData,reDirect)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3500/api/user/register",requestData)
            .then((response)=>{
                const userData = response.data
                console.log(userData)
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    dispatch( userRegister(userData) )
                    reDirect()
                }
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

export const startUserLogin = (requestData,reDirect)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3500/api/user/login",requestData)
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    console.log(userData)
                    localStorage.setItem("tokenPG",userData.tokenPG)
                    reDirect()
                }
            })
    }
}


export const startUserAccount = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3500/api/user/",{
            headers:{ "Authorization" : localStorage.getItem("tokenPG") }
        })
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    dispatch( userAccount(userData) )
                }
            })
    }
}
const userAccount = (data)=>{
    return {
        type:"USER_ACCOUNT",
        payload:data
    }
}

export const startUserLogout = ()=>{
    return {
        type:"LOGOUT"
    }
}
