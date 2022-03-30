import React, { ReactElement } from 'react';
import { Contacts } from './contacts/Contacts';

class App extends React.Component {
    render(): ReactElement {
        return <>
            <Contacts />
        </>
    }
}

export { App }
