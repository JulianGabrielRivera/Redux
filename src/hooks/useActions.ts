import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state'

export const useActions = () =>{
    const dispatch = useDispatch()
// gives us back an object that contains all diff action creators
   return  bindActionCreators(actionCreators, dispatch)
}