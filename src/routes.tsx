import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ControlPainel from './pages/ControlPainel';

interface RoutesProps {
  currentUser: null | firebase.User;
}

const Routes: React.FC<RoutesProps> = ({ currentUser }) => {
  return (
    <>
      <BrowserRouter>
        {/* <Header currentUser={currentUser} /> */}
        <Switch>
          <Route exact path='/logar' component={SignIn} />
          <Route exact path='/cadastrar' component={SignUp} />
          <Route exact path='/control' component={ControlPainel} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
