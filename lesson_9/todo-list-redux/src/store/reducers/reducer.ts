import {
    IAction,
    ITodoItem
} from '../../services/interfaces';
import {
    CHANGE_STATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    ADD_TODO_ITEM
} from '../actions/actions';
import { INIT_STATE } from '../../services/consts';

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
        case ADD_TODO_ITEM:
            const newListWithNewItem = [...state.todos, (payload as ITodoItem)];
            return { todos: newListWithNewItem }
        default:
            return state;
    }
}