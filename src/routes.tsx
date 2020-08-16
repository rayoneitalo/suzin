import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

interface RoutesProps {
  currentUser: null | firebase.User;
}

const Routes: React.FC<RoutesProps> = ({ currentUser }) => {
  return (
    <>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <div className='container'>
            <Route exact path='/logar' component={SignIn} />
            <Route exact path='/cadastrar' component={SignUp} />
          </div>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
