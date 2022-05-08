import { ChangeEventHandler, FormEventHandler } from 'react';

export interface ITodoItem {
    id: number,
    notice: string,
    isDone: boolean
}

export interface IAction {
    type: string,
    payload: number | ITodoItem;
}

export interface IAddTodoItemHook {
    onChange: ChangeEventHandler,
    submitData: FormEventHandler,
    todoItem: ITodoItem
}

export interface ITodoListHook {
    todos: ITodoItem[]
    changeStatusTodoItem: Function,
    deleteTodoItem: Function
}
