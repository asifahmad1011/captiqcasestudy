import { CharactersAction } from '../types/charactersActionTypes';
import { Characters } from "../types/Characters";
import * as actionTypes from '../actions/actionTypes';

const updateObject = (oldObject: Object, updatedValues: Object) => {
    return {
        ...oldObject,
        ...updatedValues,
    };
};

const initialState: Characters = {
    error: '',
    loading: false,
    data: [],
}

const initFetchData = (state: Characters) => {
    return updateObject(state, {
        loading: true,
        error: ''
    });
};

const fetchActionSuccess = (state: Characters, action: any) => {
    return updateObject(state, {
        loading: false,
        data: action.data,
    })
};

const fetchActionFailed = (state: Characters, action: any) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

const reducer = (state: any = initialState, action: CharactersAction) => {
    switch(action.type) {
        case actionTypes.INIT_FETCH_DATA:
            return initFetchData(state);
        case actionTypes.FETCH_ACTION_SUCCESS:
            return fetchActionSuccess(state, action);
        case actionTypes.FETCH_ACTION_FAILED:
            return fetchActionFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
