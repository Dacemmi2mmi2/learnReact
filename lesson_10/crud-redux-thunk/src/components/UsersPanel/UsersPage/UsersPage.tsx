import { ReactElement } from 'react';
import { useUsersPageHook } from '../../../hooks/useUsersPageHook';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { IUser } from '../../../services/interfaces';

export const UsersPage = (): ReactElement => {
    const { users } = useUsersPageHook();
    
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>id</TableCell>
                        <TableCell align='left'>name</TableCell>
                        <TableCell align='left'>surname</TableCell>
                        <TableCell align='left'>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user: IUser): ReactElement => {
                            return (
                                <TableRow
                                    key={user.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        '&:hover': { backgroundColor: 'lightgray' }
                                    }}
                                >
                                    <TableCell align='left'>{user.id}</TableCell>
                                    <TableCell align='left'>{user.name}</TableCell>
                                    <TableCell align='left'>{user.surname}</TableCell>
                                    <TableCell align='left'>{user.phone}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}