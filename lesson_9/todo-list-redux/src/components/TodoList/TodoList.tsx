import { ReactElement } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { ITodoItem } from '../../services/interfaces';
import { useTodoListHook } from '../../hooks/todoListHook';

export const TodoList = () => {
    const {
        todos,
        deleteTodoItem,
        changeStatusTodoItem
    } = useTodoListHook();

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                todos.map((item: ITodoItem): ReactElement => {
                    const labelId = `checkbox-list-label-${item.id}`;

                    return (
                        <ListItem
                            key={item.id}
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
    );
}