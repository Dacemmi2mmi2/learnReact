import React, {
    useState,
    ChangeEvent,
    useEffect
} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IUseFormHook } from '../services/interfaces';
import { IUser } from '../services/interfaces';
import { emptyUser } from '../services/consts';
import {
    createNewUserThunk,
    updateUserThunk
} from '../store/users/actionsUsers';

export const useFormHook = (props: { user: IUser }): IUseFormHook => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(emptyUser as IUser);
    const { id } = useParams();

    const saveUser = (event: React.MouseEvent): void => {
        event.preventDefault();
        if (id) {
            //@ts-expect-error
            dispatch(updateUserThunk(id, user));
        } else {
            // @ts-expect-error
            dispatch(createNewUserThunk(user));
        }
        navigate('/');
    }

    const toUsersPage = (): void => navigate('/');

    const writeUser = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setUser({ ...user, [target.name]: target.value });
    }

    useEffect((): void => {
        setUser(props.user);
        // eslint-disable-next-line
    }, []);

    return {
        user,
        saveUser,
        toUsersPage,
        writeUser
    }
}