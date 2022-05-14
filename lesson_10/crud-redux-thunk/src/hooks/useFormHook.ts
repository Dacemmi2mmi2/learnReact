import React, {
    useState,
    ChangeEvent,
    useEffect
} from 'react';
import { create } from '../services/loaders';
import { useNavigate } from 'react-router-dom';
import { IUseFormHook } from '../services/interfaces';
import { IUser } from '../services/interfaces';
import { emptyUser } from '../services/consts';

export const useFormHook = (props: { user: IUser }): IUseFormHook => {
    const navigate = useNavigate();
    const [user, setUser] = useState(emptyUser as IUser);

    const saveUser = (event: React.MouseEvent): void => {
        event.preventDefault();
        create(user);
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