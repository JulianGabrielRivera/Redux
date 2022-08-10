import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer' 

const reducers = combineReducers({
    respositories: repositoriesReducer
})
export default reducers;
// built in helper that says take this function and give us back the type of whatever that function returns and assign it to rootstate
// we now have a type that describes the type of information inside our store
export type RootState = ReturnType<typeof reducers>;