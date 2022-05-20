import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToDosPanel } from './ToDosPanel/ToDosPanel';

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <ToDosPanel />
    </BrowserRouter>
  );
}
