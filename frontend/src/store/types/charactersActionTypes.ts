import * as actionTypes from '../actions/actionTypes';

// Creating interfaces using action types...

export interface InitFetchData {
    type: typeof actionTypes.INIT_FETCH_DATA
}

export interface FetchActionSuccess {
    type: typeof actionTypes.FETCH_ACTION_SUCCESS,
    data: string[];
}

export interface FetchActionFailed {
    type: typeof actionTypes.FETCH_ACTION_FAILED,
    error: string;
}

// Exporting actions
export type CharactersAction =
    | InitFetchData
    | FetchActionSuccess
    | FetchActionFailed;
