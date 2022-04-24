import { useEffect, useState } from "react";
import { getApi } from '../../services/loaders';

export const useUsers = () => {
    const [listUsers, setListUsres] = useState([]);
    const uri = 'users';
    let check = true;

    useEffect((): void => {
        if (check) {
            getApi(uri).then((data) => {
                setListUsres(data);
            });
            check = !check;
        }
    }, []);

    return { listUsers }
}