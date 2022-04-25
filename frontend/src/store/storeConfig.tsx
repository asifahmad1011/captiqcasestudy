import {
    createStore,
    combineReducers,
    applyMiddleware,
    AnyAction,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import charactersReducer from '../store/reducers/characters';

export const rootReducer = combineReducers({
    characters: charactersReducer,
})

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AnyAction>)
);