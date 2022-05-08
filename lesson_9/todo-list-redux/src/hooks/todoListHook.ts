import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, deleteItem } from '../store/actions/actions';
import { ITodoItem } from '../services/interfaces';

export const useTodoListHook = () => {
    const todos = useSelector((state) => (state as { todos: ITodoItem[] }).todos);
    const dispatch = useDispatch();

    const changeStatusTodoItem = (id: number): void => {
        dispatch(changeStatus(id));
    }

    const deleteTodoItem = (id: number): void => {
        dispatch(deleteItem(id));
    }

    return {
        todos,
        changeStatusTodoItem,
        deleteTodoItem
    }
}