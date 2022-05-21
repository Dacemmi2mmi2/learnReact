import { ReactElement } from 'react';
import { ITodo } from '../../services/interfaces';
import { ToDoItem } from '../ToDoItem/ToDoItem';

export const ToDoList = ({ todos }: { todos: ITodo[] }): ReactElement => {
    return (
        <>
            {
                todos.map((todo: ITodo): ReactElement => {
                    return (
                        <ToDoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.title}
                            status={todo.completed}
                        />
                    );
                })
            }
        </>
    );
}