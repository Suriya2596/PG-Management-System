const initialValue = []

const buildingsReducer = ( state=initialValue,action )=>{

    switch(action.type){
        case "BUILDING_CREATE":{
            return [...state,action.payload]
        }
        case "BUILDING_LIST" :{
            return [...action.payload]
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