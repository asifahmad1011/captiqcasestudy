import * as actionTypes from './actionTypes';
import { CharactersAction } from '../types/charactersActionTypes';

// Creating function according to their type...
export const initFetchData = (): CharactersAction => ({
    type: actionTypes.INIT_FETCH_DATA
});

export const fetchActionSuccess = (data: string[]): CharactersAction => ({
    type: actionTypes.FETCH_ACTION_SUCCESS,
    data: data,
});

export const fetchActionFailed = (error: string): CharactersAction => ({
    type: actionTypes.FETCH_ACTION_FAILED,
    error: error,
})