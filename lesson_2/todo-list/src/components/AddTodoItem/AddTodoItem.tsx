import React, { ChangeEvent, ReactElement } from 'react';
import './AddTodoItem.css';

interface IStateAddTodoItem {
    title: string
}

interface IPropsAddTodoItem {
    updateData: Function
}

class AddTodoItem extends React.Component<IPropsAddTodoItem> {
    state: IStateAddTodoItem = {
        title: ''
    }

    constructor(props: IPropsAddTodoItem) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render(): ReactElement {
        const { updateData } = this.props;
        const { title } = this.state;
        return <>
            <div className="AddTodoItem">
                <input type="text" placeholder="text..." onChange={this.onInputChange}/>
                <button onClick={(): void => updateData(title)}>Add item</button>
            </div>
        </>
    }

    onInputChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({ title: event.target.value });
    }
}

export { AddTodoItem }