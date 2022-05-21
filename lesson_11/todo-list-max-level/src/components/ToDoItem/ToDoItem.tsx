import { ReactElement } from 'react';
import { ITodoItemProps } from '../../services/interfaces';

export const ToDoItem = (props: ITodoItemProps): ReactElement => {
    const { id, text, status } = props as ITodoItemProps;
    return (
        <>
            <p>{id}</p>
            <p>{text}</p>
        </>
    );
}