import axios from 'axios';
// type definition for the dispatch function
import {Dispatch} from 'redux'
import {ActionType} from '../action-types'
import {Action} from '../actions';


export const searchRepositories = (term: string) =>{
    // how we manually dispatch actions directly into redux store, and get them processed by reducer
    // this dispatch<action> is telling typescript that we are going to get a function here that can only be called with some argument that matches the type of Action
return async (dispatch: Dispatch<Action>) =>{
// immediately dispatch an action
dispatch({
    type:ActionType.SEARCH_REPOSITORIES
});
try{
    // request logic
const {data}  = await axios.get('https://registry.npmjs.org/-/v1/search', {
    params:{
        text:term
    }
})
const names = data.objects.map((result)=>{
return result.package.name;
})

dispatch({
    type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload:names
})

}
catch(err){
    if (err instanceof Error) {
        // ✅ TypeScript knows err is Error
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES_ERROR,
            
            payload: err.message
          
            // all error objects in javascript have a  message property.
          
        })
      } else {
        console.log('Unexpected error', err);
      }
// if anything goes wrong we want to dispatch an action

}
}
}