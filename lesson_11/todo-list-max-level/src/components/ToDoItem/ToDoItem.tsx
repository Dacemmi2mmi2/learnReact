import { ReactElement } from 'react';
import { useCardTodoItem } from '../../hooks/useCardTodoItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import { ITodoItemProps } from '../../services/interfaces';
import linkTodoImg from '../../img/todo.png';
import {
    styleFabs,
    styleCarsActions,
    styleCard,
    styleProgressIcon
} from '../../services/consts';

export const ToDoItem = (props: ITodoItemProps): ReactElement => {
    const {
        id,
        text,
        status,
        deleteTodoItem,
        toggleStatusTodoItem,
        updateDescriptionTodoItem
    } = useCardTodoItem(props);

    return (
        <Card sx={styleCard}>
            <CardContent sx={{ width: 120 }}>
                <Typography sx={{ display: 'flex', fontSize: 15 }}>
                    {status ? 'done' : 'in progress'}
                    {status ? <DoneIcon sx={styleProgressIcon} /> : <RotateRightIcon sx={styleProgressIcon} />}
                </Typography>
                <img src={linkTodoImg} alt="TodoList" style={{ width: '100%' }} />
            </CardContent>
            <CardContent sx={{ width: 200 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {`${id}. task`}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {text}
                </Typography>
            </CardContent>
            <CardActions sx={styleCarsActions}>
                <Fab
                    sx={styleFabs}
                    color='info'
                    aria-label='edit'
                    size='small'
                    onClick={(): void => toggleStatusTodoItem(id)}
                >
                    <CallMissedOutgoingIcon />
                </Fab>
                <Fab
                    sx={styleFabs}
                    color='info'
                    aria-label='edit'
                    size='small'
                    onClick={(): void => updateDescriptionTodoItem(id)}
                >
                    <EditIcon />
                </Fab>
                <Fab
                    sx={styleFabs}
                    color='error'
                    aria-label='delete'
                    size='small'
                    onClick={(): void => deleteTodoItem(id)}
                >
                    <DeleteIcon />
                </Fab>
            </CardActions>
        </Card>
    );
}