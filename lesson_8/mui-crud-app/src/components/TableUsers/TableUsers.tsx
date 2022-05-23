import { ReactElement } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { IUserData } from '../../services/interfaces';
import { linkStyles } from '../../services/additionalStyles';
import { deleteItem } from '../../services/loaders';

export const TableUsers = ({ listUsers }: { listUsers: IUserData[] }): ReactElement => {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="left">name</TableCell>
                        <TableCell align="left">username</TableCell>
                        <TableCell align="left">phone</TableCell>
                        <TableCell align="left">email</TableCell>
                        <TableCell align='center'>
                            <Button
                                variant="contained"
                                size='small'
                            >
                                <Link
                                    style={linkStyles}
                                    to={'/createUser'}>
                                    add user
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        listUsers.map((item: IUserData): ReactElement => {
                            return (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{item.id}</TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.username}</TableCell>
                                    <TableCell align="left">{item.phone}</TableCell>
                                    <TableCell align="left">{item.email}</TableCell>
                                    <TableCell align='center'>
                                        <ButtonGroup variant="contained" size='small'>
                                            <Button>
                                                <Link
                                                    to={`/updateUser/${item.id}`}
                                                    style={linkStyles}
                                                >
                                                    edit
                                                </Link>
                                            </Button>
                                            <Button 
                                                onClick={
                                                    (): Promise<IUserData> => deleteItem('users', item.id)
                                                }
                                            >
                                                delete
                                            </Button>
                                        </ButtonGroup>
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