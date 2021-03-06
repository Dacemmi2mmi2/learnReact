import { ReactElement } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { ITodoItem, ITodoListHook } from '../../services/interfaces';
import { useTodoListHook } from '../../hooks/todoListHook';
import { AddTodoItem } from './AddTodoItem/AddTodoItem';

export const TodoList = (): ReactElement => {
    const {
        todos,
        deleteTodoItem,
        changeStatusTodoItem,
    } = useTodoListHook() as ITodoListHook;

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    todos.map((item: ITodoItem, index: number): ReactElement => {
                        const labelId = `checkbox-list-label-${item.id}`;

                        return (
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                <ListItemButton
                                    role={undefined}
                                    onClick={(): void => changeStatusTodoItem(item.id)}
                                    dense
                                >
                                    <ListItemIcon>
                                        <Checkbox checked={item.isDone ? true : false} />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={labelId}
                                        primary={item.notice}
                                    />
                                </ListItemButton>
                                <Button
                                    variant="contained"
                                    onClick={(): void => deleteTodoItem(item.id)}
                                >
                                    delete
                                </Button>
                            </ListItem>
                        );
                    })
                }
            </List>
            <AddTodoItem />
        </>
    );
}