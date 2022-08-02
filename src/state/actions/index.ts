import {ActionType} from '../action-types'

interface SearchRepoAction {
    type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepoSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}
interface SearchRepoErrorAction{
    type:ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}
// all diff possible actions that can be used by our diff reducers
export type Action =SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction

