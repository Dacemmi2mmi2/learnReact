import { ReactElement} from 'react';
import Box from '@mui/material/Box';
import { ITodo } from '../../services/interfaces';
import { ToDoItem } from '../ToDoItem/ToDoItem';

export const ToDoList = ({ todos }: { todos: ITodo[] }): ReactElement => {
    return (
        <Box sx={{
            widht: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
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
        </Box>
    );
}