import React, { ReactElement } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { IUser } from '../../../../services/interfaces';
import {
    alignTableRow,
    variantBtn,
    stylesTbodyRow
} from '../../../../services/consts';
import { useTableUsersHook } from '../../../../hooks/useTableUsersHook';

export const TableUsers = ({ users }: { users: IUser[] }): ReactElement => {
    const {
        deleteUser,
        createOrEditUser
    } = useTableUsersHook();

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align={alignTableRow}>
                            id
                        </TableCell>
                        <TableCell align={alignTableRow}>
                            name
                        </TableCell>
                        <TableCell align={alignTableRow}>
                            surname
                        </TableCell>
                        <TableCell align={alignTableRow}>
                            phone
                        </TableCell>
                        <TableCell align={alignTableRow}>
                            <Button
                                variant={variantBtn}
                                onClick={(): void => createOrEditUser()}
                            >
                                add user
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user: IUser): ReactElement => {
                            return (
                                <TableRow
                                    key={user.id}
                                    sx={stylesTbodyRow}
                                    onClick={(): void => createOrEditUser(user.id)}
                                >
                                    <TableCell align={alignTableRow}>
                                        {user.id}
                                    </TableCell>
                                    <TableCell align={alignTableRow}>
                                        {user.name}
                                    </TableCell>
                                    <TableCell align={alignTableRow}>
                                        {user.surname}
                                    </TableCell>
                                    <TableCell align={alignTableRow}>
                                        {user.phone}
                                    </TableCell>
                                    <TableCell align={alignTableRow}>
                                        <Button
                                            variant={variantBtn}
                                            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                                                event.stopPropagation();
                                                deleteUser(user.id);
                                            }}
                                        >
                                            delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}