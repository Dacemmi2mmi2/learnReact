import { ITodoItem } from './interfaces';

export const INIT_STATE: { todos: ITodoItem[] } = {
    todos: [
        { id: 1, notice: "todo1", isDone: true },
        { id: 2, notice: "todo2", isDone: false },
        { id: 3, notice: "todo3", isDone: false },
        { id: 4, notice: "todo4", isDone: false },
        { id: 5, notice: "todo5", isDone: false },
        { id: 6, notice: "todo6", isDone: false },
    ],
}

export const dataTodoItem: ITodoItem = {
    id: 0, 
    notice: '',
    isDone: false
}