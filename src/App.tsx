import React from 'react';
import { connect } from 'react-redux';

import { auth } from './firebase/';
import { createUserProfileDocument } from './firebase/firestore';
import { setCurrentUser } from './redux/actions/user';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

interface MyProps {
  currentUser: any;
}

interface MyState {}

class App extends React.Component<MyProps, MyState> {
  unsubscribeFromAuth: any = null;

  componentDidMount() {
    const { currentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapshot: any) => {
          currentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        currentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  currentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
