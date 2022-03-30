import React, { ReactElement } from 'react';
import { FormContact } from '../formContact/FormContact';
import { ListContact } from './../listContact/ListContact';

// const urlApi: string = 'https://612687da3ab4100017a68fd8.mockapi.io/contacts';
class Contacts extends React.Component {
    render(): ReactElement {
        return <>
            <ListContact /> 
            <FormContact />
        </>
    }

    // componentDidMount(): void {
    //     fetch(urlApi, {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     }).then(response => {
    //         if (response.ok) {
    //             response.json().then(data => console.log(data));
    //         } else {
    //             throw new Error('somthing went wrong');
    //         }
    //     });
    // }
}

export { Contacts }
