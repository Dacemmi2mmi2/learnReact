import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState, IUseTodoListPage } from '../services/interfaces';
import { getApi } from '../services/loaders';
import { getTodoListThunk } from '../store/toDoList/actionsToDoList';

export const useTodoListPage = (): IUseTodoListPage => {
    const todos = useSelector(({ listTodos }: IState) => listTodos.todos);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect((): void => {
        getApi()
            .then((todos): void => {
                //@ts-expect-error
                dispatch(getTodoListThunk(todos));
                setLoading(false);
            })
            .catch((): void => {
                setError(true);
            });
    }, [dispatch]);

    return {
        todos,
        loading,
        error
    }
}