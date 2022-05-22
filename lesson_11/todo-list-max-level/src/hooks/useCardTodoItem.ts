import { useDispatch } from 'react-redux';
import { ITodo, ITodoItemProps } from '../services/interfaces';
import {
    deleteTodoThunk,
    updateTodoThunk
} from '../store/toDoList/actionsToDoList';

export const useCardTodoItem = (props: ITodoItemProps) => {
    const { id, text, status } = props;
    const dispatch = useDispatch();

    const deleteTodoItem = (id: number | string): void => {
        //@ts-expect-error
        dispatch(deleteTodoThunk(id));
    }

    const toggleStatusTodoItem = (id: number | string): void => {
        const todoItemNewStatus: ITodo = {
            id,
            title: text,
            completed: !status
        }
        // @ts-expect-error
        dispatch(updateTodoThunk(id, todoItemNewStatus));
    }

    const updateDescriptionTodoItem = (id: number | string): void => {
        console.log('descr')
    }

    return {
        id,
        text,
        status,
        deleteTodoItem,
        toggleStatusTodoItem,
        updateDescriptionTodoItem
    }
}