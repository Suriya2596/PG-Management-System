import axios from "axios"

<<<<<<< HEAD
export const startUserRegister = (requestData)=>{
=======
export const startUserRegister = (requestData,resetForm)=>{
>>>>>>> naviagtion
    return (dispatch)=>{
        axios.post("http://localhost:3500/api/user/register",requestData)
            .then((response)=>{
                const userData = response.data
                console.log(userData)
<<<<<<< HEAD
                dispatch( userRegister(data) )
=======
                dispatch( userRegister(userData) )
                resetForm()
>>>>>>> naviagtion
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