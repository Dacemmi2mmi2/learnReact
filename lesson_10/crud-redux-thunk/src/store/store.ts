import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { reduserUsers } from '../store/users/reduserUsers';
import { reducerFormUser } from './formUser/reducerFormUser';

const reducers = combineReducers({
    listUsers: reduserUsers,
    formUser: reducerFormUser
});

export const store = createStore(reducers, applyMiddleware(thunk));