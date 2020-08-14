import React from 'react';

import { Container, Logo, RightSide, Bars } from './styles';

interface HeaderProps {
  currentUser: null | firebase.User;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <nav>
        <Logo />
        <RightSide>
          <Bars />
          <ul>
            <li>Início</li>
            <li>Produtos</li>
            <li>Sobre</li>
          </ul>
        </RightSide>
      </nav>
    </Container>
  );
};

export default Header;
