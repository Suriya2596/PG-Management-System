const initialValue = []

const buildingsReducer = ( state=initialValue,action )=>{

    switch(action.type){
        case "BUILDING_CREATE":{
            return [...state,action.payload]
        }
        case "BUILDING_LIST" :{
            return [...action.payload]
        }
        case "BUILDING_UPDATE" :{
            return state.map((building)=>{
                if(action.payload._id===building._id){
                    return {...building,...action.payload}
                }else{
                    return {...building}
                }
            })
        }
        case "LOGOUT":{
            return []
        }
        default :{
            return [...state]
        }
    }

}

export default buildingsReducer