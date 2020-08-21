import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
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
