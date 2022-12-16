const initialValue = {}

const usersReducer = (state=initialValue,action)=>{
    switch(action.type){
        case "USER_ACCOUNT":{
            return {...action.payload}
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