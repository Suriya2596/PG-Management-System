import { createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import usersReducer from "../reducers/usersReducer"
import buildingsReducer from "../reducers/buildingsReducer"


const configureStore = ()=>{
    const store = createStore( combineReducers({
        users:usersReducer,
        buildings:buildingsReducer
    }),applyMiddleware(thunk) )
    return store
}

export default configureStore