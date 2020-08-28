import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Routes />
      </>
    );
  }
}

export default App;
