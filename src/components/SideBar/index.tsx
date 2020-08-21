import React from 'react';
import { Container, Menu, DropdownContainer } from './styles';
// import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  const options = [DropdownContainer];
  const defaultOption = options[0];
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
