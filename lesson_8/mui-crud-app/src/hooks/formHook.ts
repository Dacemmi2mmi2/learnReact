// import { create, update } from '../services/loaders';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IFormProps, IUserData } from '../services/interfaces';
import { emptyUser } from '../services/const';

export const useForm = (props: IFormProps) => {
    const { dataUser, edit } = props as IFormProps;
    const navigate = useNavigate();
    const [dataUserFrom, setDataUserForm] = useState(dataUser);
    const newDataUser = Object.assign({}, emptyUser);

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        // if () {

        // } else {
        //     setDataUserForm({ ...dataUserFrom, [target.name]: target.value })
        // }
    }

    const submitData = (event: any): void => {
        event.preventDefault();
        console.log(dataUserFrom);
        // navigate('/users');
        
        if (edit) {
            // update()
        } else {
            // create()
        }
    }

    return {
        dataUserFrom,
        setDataUserForm,
        submitData,
        onChange
    }
}