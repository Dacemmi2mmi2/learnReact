import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UsersPanel } from './UsersPanel/UsersPanel';
import { store } from '../store/store';

export const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <UsersPanel />
        </Provider>
      </BrowserRouter>
    </>
  );
}
