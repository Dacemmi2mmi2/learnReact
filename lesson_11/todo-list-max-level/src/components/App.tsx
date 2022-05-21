import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Pages } from './Pages/Pages';

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Pages />
      </Provider>
    </BrowserRouter>
  );
}
