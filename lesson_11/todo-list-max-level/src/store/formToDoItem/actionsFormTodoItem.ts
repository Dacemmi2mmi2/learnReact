import { AnyAction } from 'redux';
import { ITodo } from '../../services/interfaces';

export const FORMTODO_SET_TODO_ITEM = 'FORMTODO_SET_TODO_ITEM';
export const setTodoItem = (todoItem: ITodo): AnyAction => ({
    type: FORMTODO_SET_TODO_ITEM,
    payload: todoItem
});

export const FORMTODO_TOGGLE_MODAL = 'FORMTODO_TOGGLE_MODAL';
export const toggleViewModal = (view: boolean): AnyAction => ({
    type: FORMTODO_TOGGLE_MODAL,
    payload: view
});
