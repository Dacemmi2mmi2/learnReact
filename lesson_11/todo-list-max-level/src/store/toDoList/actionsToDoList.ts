import { AnyAction, Dispatch } from 'redux';
import { remove, create, update } from '../../services/loaders';
import {
    IActionThunk,
    IState,
    ITodo
} from '../../services/interfaces';

export const TODOLIST_SET_LIST_TODOS = 'TODOLIST_SET_LIST_TODOS';
export const setTodoList = (todoList: ITodo[]): AnyAction => ({
    type: TODOLIST_SET_LIST_TODOS,
    payload: todoList
});

export const getTodoListThunk = (listTodos: ITodo[]): IActionThunk =>
    (dispatch: Dispatch<AnyAction>): void => {
        dispatch(setTodoList(listTodos));
    }

export const createNewTodoThunk = (todo: ITodo): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        const { listTodos } = getState();
        create(todo)
            .then((newTodo) => {
                const updatedTodoList = [...listTodos.todos, newTodo];
                dispatch(setTodoList(updatedTodoList));
            });
    }

export const updateTodoThunk = (id: number | string, todo: ITodo): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        const { listTodos } = getState();
        update(id, todo)
            .then((updatedTodo) => {
                const updatedTodoList = listTodos.todos.map((todo) => todo.id === id ? updatedTodo : todo);
                dispatch(setTodoList(updatedTodoList));
            })
    }

export const deleteTodoThunk = (id: number | string): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        const { listTodos } = getState();
        remove(id)
            .then(() => {
                const updatedTodoList = listTodos.todos.filter((todo) => todo.id !== id);
                dispatch(setTodoList(updatedTodoList));
            });
    }