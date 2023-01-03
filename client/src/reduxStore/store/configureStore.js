import { createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import usersReducer from "../reducers/usersReducer"
import buildingsReducer from "../reducers/buildingsReducer"
import roomsReducer from "../reducers/roomsReducer"

const configureStore = ()=>{
    const store = createStore( combineReducers({
        users:usersReducer,
        buildings:buildingsReducer,
        rooms:roomsReducer
    }),applyMiddleware(thunk) )
    return store
}

export default configureStore