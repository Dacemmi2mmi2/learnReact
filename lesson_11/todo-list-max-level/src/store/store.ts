import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { reducerTodoList } from '../store/toDoList/reducerToDoList';
import { reducerFormTodoItem } from '../store/formToDoItem/reducerFormTodoItem';

const reducers = combineReducers({
    listTodos: reducerTodoList,
    formTodoItem: reducerFormTodoItem
});

export const store = createStore(reducers, applyMiddleware(thunk));