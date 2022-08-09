
import {ActionType} from '../action-types'
import {Action} from '../actions'


interface RepoState {
    loading:boolean;
    error: string | null;
    data: string[];
}

const initialState ={
    loading:false,
    error:null,
    data:[] 
}

// interface Action {
// type: string;
// // may or may not have a payload property of any type, ? = optional
// payload?: any;
// }



// at the : now typescript knows that anything we return from reducer it must match the interface repostate
const reducer = (state:RepoState = initialState,action: Action ): RepoState =>{
 
    // code we have inside reducer is almost always a switch statement
switch(action.type){
    // action we will see as soon as the user clicks on search button
    case ActionType.SEARCH_REPOSITORIES:
        return {loading:true, error:null,data:[]}
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            // 100 percent sure that action is searchreposuccess
            return {loading:false, error:null, data:action.payload}
            case ActionType.SEARCH_REPOSITORIES_ERROR:
                // payload will contain error message
                return {loading:false, error:action.payload, data:[]}
    default: return state;
}
}

export default reducer;