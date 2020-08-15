import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { auth } from './firebase/firebase-utils';

import Routes from './routes';

interface MyProps {}

interface MyState {
  currentUser: null | firebase.User;
}

class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Routes currentUser={this.state.currentUser} />
      </>
    );
  }
}

export default App;
