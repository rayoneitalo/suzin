import React from 'react';
import { Link } from 'react-router-dom';

// import { auth } from '../../firebase/auth';
import { Container, Logo, RightSide, Bars } from './styles';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <nav>
          <Link to='/'>
            <Logo />
          </Link>
          <RightSide>
            <Bars />
            <ul>
              <li>
                <Link to='/'>Início</Link>
              </li>
              <li>
                <Link to='/'>Produtos</Link>
              </li>
              <li>
                {/* {this.props.currentUser ? (
                  <Link to='/' onClick={() => auth.signOut()}>
                    Deslogar
                  </Link>
                ) : (
                  <Link to='/logar'>Logar</Link>
                )} */}
              </li>
            </ul>
          </RightSide>
        </nav>
      </Container>
    );
  }
}

export default Header;
