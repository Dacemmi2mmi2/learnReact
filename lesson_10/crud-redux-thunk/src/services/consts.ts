import { IStylesTbodyRow } from './interfaces';

export const usersURI = 'users';

export const alignTableRow = 'left';

export const variantBtn = 'contained';

export const stylesTbodyRow: IStylesTbodyRow = {
    cursor: 'pointer',
    '&:last-child td, &:last-child th': { border: 0 },
    '&:hover': { backgroundColor: 'lightgray' }
}