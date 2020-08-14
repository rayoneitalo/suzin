import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { auth } from './firebase/firebase-utils';

import Routes from './routes';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => this.setState({ currentUser: user }));
  }

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
