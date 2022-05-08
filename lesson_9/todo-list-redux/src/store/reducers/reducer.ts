import {
    IAction,
    ITodoItem
} from '../../services/interfaces';
import {
    CHANGE_STATE_TODO_ITEM,
    DELETE_TODO_ITEM
} from '../actions/actions';

const INIT_STATE: { todos: ITodoItem[] } = {
    todos: [
        { id: 1, notice: "todo1", isDone: true },
        { id: 2, notice: "todo2", isDone: false },
        { id: 3, notice: "todo3", isDone: false },
        { id: 4, notice: "todo4", isDone: false },
        { id: 5, notice: "todo5", isDone: false },
        { id: 6, notice: "todo6", isDone: false },
    ],
}

export const reducer = (state = INIT_STATE, { type, payload }: IAction): { todos: ITodoItem[] } => {
    switch (type) {
        case CHANGE_STATE_TODO_ITEM:
            const newStatusesTodos = state.todos.map((item: ITodoItem): ITodoItem => 
                item.id === payload ? { ...item, isDone: !item.isDone } : item);
            return { todos: newStatusesTodos }
        case DELETE_TODO_ITEM:
            const newListWithoutItem = state.todos.filter((item: ITodoItem): boolean =>
                item.id !== payload);
            return { todos: newListWithoutItem }
        default:
            return state;
    }
}