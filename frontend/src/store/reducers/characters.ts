import { CharactersAction } from '../types/charactersActionTypes';
import { Characters } from "../types/Characters";
import * as actionTypes from '../actions/actionTypes';

// Managing existing state by updating the data...
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

// Using to update loading status of API call...
const initFetchData = (state: Characters) => {
    return updateObject(state, {
        loading: true,
        error: ''
    });
};

// Using this function when to update state when API is successfull...
const fetchActionSuccess = (state: Characters, action: any) => {
    return updateObject(state, {
        loading: false,
        data: action.data,
    })
};


// USing this function when there is some error during API call...
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
