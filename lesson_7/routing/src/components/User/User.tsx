import { ReactElement } from 'react';
import {
    Iaddres,
    Icompany,
    IUserData,
    IUserProps } from '../../services/interfaces';
import './User.css';

export const User = ({ dataUser }: IUserProps): ReactElement => {
    const {
        address,
        company,
        email,
        id,
        name,
        phone,
        username,
        website
    } = dataUser as IUserData;

    const {
        city,
        geo,
        street,
        suite,
        zipcode
    } = address as Iaddres;

    const { lat, lng } = geo as { lat: string, lng: string };
    const { bs, catchPhrase } = company as Icompany;

    return (
        <div className="card__user">
            <div className="user">
                <p className="subtitle">User</p>
                <ul>
                    <li>name: {name}</li>
                    <li>username: {username}</li>
                    <li>id: {id}</li>
                    <li>phone: {phone}</li>
                    <li>email: {email}</li>
                    <li>website: {website}</li>
                </ul>
            </div>
            <div className="addres">
                <p className="subtitle">Addres</p>
                <ul>
                    <li>city: {city}</li>
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>zipcode: {zipcode}</li>
                    <li>
                        <p>geolocation</p>
                        <ul>
                            <li>lat: {lat}</li>
                            <li>lng: {lng}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="company">
                <p className="subtitle">Company</p>
                <ul>
                    <li>bs: {bs}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>name: {company.name}</li>
                </ul>
            </div>
        </div>
    );
}