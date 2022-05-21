import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { reduserTodoList } from '../store/toDoList/reducerToDoList';
// import { reducerFormUser } from './formUser/reducerFormUser';

const reducers = combineReducers({
    listTodos: reduserTodoList,
    // formUser: reducerFormUser
});

export const store = createStore(reducers, applyMiddleware(thunk));