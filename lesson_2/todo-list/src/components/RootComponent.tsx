import React, { createRef, ReactElement } from 'react';
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
        completed: false,
    }

    private addNewItem = createRef<TodoList>();
 
    constructor(props: object) {
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    updateData(data: string): void {
        id = id + 1;
        this.setState({
            id: String(id),
            title: data,
            completed: false,
        } as IStateRootComponent);
        //@ts-expect-error
        setTimeout((): void => this.addNewItem.current.addNewTodoItem());
    }

    render(): ReactElement {
        return <>
            <Header />
            <AddTodoItem updateData={this.updateData}/>
            <TodoList ref={this.addNewItem} {...this.state}/>
        </>
    }
}

export { RootComponent }