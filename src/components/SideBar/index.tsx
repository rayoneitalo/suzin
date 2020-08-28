import React from 'react';
import { Container, Menu, DropdownContainer } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Menu>
        <h2>Produto</h2>
        <DropdownContainer>
          <span>Meu produto</span>
          <span>Produto parceiro</span>
        </DropdownContainer>
        <h2>Galeria</h2>
        <DropdownContainer>
          <span>Produtos</span>
          <span>Eventos</span>
        </DropdownContainer>
      </Menu>
    </Container>
  );
};

export default SideBar;
