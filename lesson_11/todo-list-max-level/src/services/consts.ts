import { ITodo } from './interfaces';

export const todosURI = 'todos';

export const emptyTodoItem: ITodo = {
    id: '',
    title: '',
    completed: false
}

export const styleProgressIcon: { [key: string]: number } = {
    ml: 1
}

export const styleTypographyProgress: { [key: string]: string | number } = {
    display: 'flex',
    fontSize: 15
}

export const styleFabs: { [key: string]: string } = {
    boxShadow: 'none'
}

export const styleCarsActions: { [key: string]: string | number } = {
    width: 70,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
}

export const styleCard: { [key: string]: string | number } = {
    width: 500,
    boxShadow: '10px 10px 20px',
    m: '15px 30px 25px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
}