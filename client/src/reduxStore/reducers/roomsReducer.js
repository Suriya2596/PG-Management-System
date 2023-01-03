const initialValue = []

const roomsReducer = (state=initialValue,action)=>{
    switch(action.type){
        case "ROOM_CREATE" : {
            return [...state,action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default roomsReducer