import React, { useState, useEffect } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { auth } from './firebase/firebase-utils';

import Routes from './routes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
