import React, { ReactElement } from 'react';
import { Header } from './Header/Header'
import { AddTodoItem } from './AddTodoItem/AddTodoItem';
import { TodoList } from './TodoList/TodoList';

interface IStateRootComponent {
    [key: string]: string | boolean
}

let id: number = 5;

class RootComponent extends React.Component {
    state: IStateRootComponent = {
        id: '',
        title: '',
        completed: false
    }
 
    constructor(props: object) {
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    render(): ReactElement {
        return <>
            <Header />
            <AddTodoItem updateData={this.updateData}/>
            <TodoList />
        </>
    }

    updateData(data: any): void {
        id = id + 1;
        this.setState({
            id: String(id),
            title: data,
            completed: false
        });
        console.log(data);
    }
}

export { RootComponent }