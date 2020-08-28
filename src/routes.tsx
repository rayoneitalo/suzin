import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ControlPainel from './pages/ControlPainel';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/control" component={ControlPainel} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
