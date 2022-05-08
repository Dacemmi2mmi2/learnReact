import { ReactElement } from 'react';
import { TodoList } from './TodoList/TodoList';
import { Provider } from 'react-redux'
import { store } from '../store/store';

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}