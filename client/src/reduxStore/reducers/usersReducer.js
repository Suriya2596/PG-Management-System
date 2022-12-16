const initialValue = {}

const usersReducer = (state=initialValue,action)=>{
    switch(action.type){
        case "USER_REGISTER" : {
            return {...action.payload}
        }
        case "USER_ACCOUNT":{
            return {...state,...action.payload}
        }
        case "LOGOUT":{
            return {}
        }
        default :{
            return state
        }
    }
}

export default usersReducer