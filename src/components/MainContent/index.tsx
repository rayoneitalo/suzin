import React from 'react';
import { Container, Header, Form } from './styles';
import InputForm from '../InputForm';
import { saveProduct } from '../../httpService/productHttpService';

class MainContent extends React.Component {
  state = {
    product: {
      name: '',
      ingredients: [],
      weight: 0,
      price: 0,
      file: null,
    },
  };

  handleChange = (e: any) => {
    switch (e.target.id) {
      case 'product-name':
        this.setState({
          product: {
            ...this.state.product,
            name: e.target.value,
          },
        });
        break;
      case 'product-ingredients':
        this.setState({
          product: {
            ...this.state.product,
            ingredients: e.target.value,
          },
        });
        break;
      case 'product-weight':
        this.setState({
          product: {
            ...this.state.product,
            weight: e.target.value,
          },
        });
        break;
      case 'product-price':
        this.setState({
          product: {
            ...this.state.product,
            price: e.target.value,
          },
        });
        break;
      case 'product-image':
        this.setState({
          product: {
            ...this.state.product,
            file: e.target.files,
          },
        });
        break;
      default:
        break;
    }
  };

  handleSave = () => {
    saveProduct({
      ...this.state,
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <h2>Novo produto</h2>
        </Header>
        <Form>
          <InputForm
            id="product-name"
            type="text"
            name="productName"
            label="Nome do produto"
            fatherFunction={this.handleChange}
          />
          <InputForm
            id="product-ingredients"
            type="text"
            label="Ingredients"
            name="productIngredients"
            fatherFunction={this.handleChange}
          />

          <InputForm
            id="product-weight"
            type="text"
            label="Peso do produto"
            name="productWeight"
            fatherFunction={this.handleChange}
          />

          <InputForm
            id="product-price"
            type="text"
            label="Preço do produto"
            name="productPrice"
            fatherFunction={this.handleChange}
          />
          <InputForm
            id="product-image"
            type="file"
            name="productImage"
            fatherFunction={this.handleChange}
          />

          <button onClick={this.handleSave}>Cadastrar</button>
        </Form>
      </Container>
    );
  }
}

export default MainContent;
