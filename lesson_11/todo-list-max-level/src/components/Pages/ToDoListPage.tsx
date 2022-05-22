import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { ToDoList } from '../ToDoList/TodoList';
import { TopBar } from '../TopBar/TopBar';
import { LoadingPage } from './LoadingPage/LoadingPage';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { useTodoListPage } from '../../hooks/useToDoListPage';
import { IUseTodoListPage } from '../../services/interfaces';

export const ToDoListPage = (): ReactElement => {
    const {
        todos,
        loading,
        error
    } = useTodoListPage() as IUseTodoListPage;

    const pages = (): ReactElement => {
        switch (true) {
            case loading: return <LoadingPage />;
            case error: return <ErrorPage />;
            default: return <>
                <TopBar />
                <ToDoList todos={todos}/>
                <Outlet />
            </>
        }
    }

    return (
        <>
            {pages()}
        </>
    );
}