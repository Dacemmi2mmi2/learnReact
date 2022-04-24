import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminPanel } from './AdminPanel/AdminPanel';

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <AdminPanel />
    </BrowserRouter>
  );
}

