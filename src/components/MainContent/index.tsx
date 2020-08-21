import React from 'react';
import { Container, Header, Form, AddIcon, Moeda } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Novo produto</h2>
      </Header>
      <Form>
        <div className='for-group'>
          <label>Nome do produto</label>
          <input type='text' placeholder='Digite o nome do produto' />
          <label>Ingridientes</label>
          <input type='text' placeholder='Adicione um ingrediente' />
          <AddIcon />
        </div>
        <div className='for-group'>
          <label>Peso do produto</label>
          <input type='text' placeholder='Digite o peso do produto' />
          <label>Valor do produto</label>
          <input type='text' placeholder='Valor' />
          <Moeda />
        </div>
      </Form>
    </Container>
  );
};

export default MainContent;
