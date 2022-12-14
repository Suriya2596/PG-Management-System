const initialValue = {}

const usersReducer = (state=initialValue,action)=>{
    switch(action.type){
        case "USER_REGISTER" : {
            return {...action.payload}
        }
        default :{
            return state
        }
    }
}

export default usersReducer