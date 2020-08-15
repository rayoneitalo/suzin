import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';

interface RoutesProps {
  currentUser: null | firebase.User;
}

const Routes: React.FC<RoutesProps> = ({ currentUser }) => {
  return (
    <>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
