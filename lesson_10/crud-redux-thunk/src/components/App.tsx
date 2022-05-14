import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { UsersPanel } from './UsersPanel/UsersPanel';

export const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <UsersPanel />
      </BrowserRouter>
    </>
  );
}
