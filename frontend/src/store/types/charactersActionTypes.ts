import * as actionTypes from '../actions/actionTypes';

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

export type CharactersActionTypes =
    | InitFetchData
    | FetchActionSuccess
    | FetchActionFailed;

export type CharactersAction = CharactersActionTypes;