import React from 'react';
import { Container, Header, Form } from './styles';
import InputForm from '../InputForm';
import { saveProduct } from '../../httpService/productHttpService';
import FormContent from '../FormContent';

class MainContent extends React.Component {
  state = {
    product: {
      name: '',
      ingredients: [],
      weight: 0,
      price: 0,
      pathImage: '',
      file: null,
    },
  };
  // Update state values
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
    }
  };

  handleSave = (e: any) => {
    e.preventDefault();
    saveProduct({
      ...this.state,
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <h2>Meu produto</h2>
        </Header>
        <Form>
          {/* <div className="group-form">
            <InputForm
              id="product-name"
              type="text"
              name="productName"
              label="Nome do produto"
              placeholder="Ex: Pão Integral..."
              fatherFunction={this.handleChange}
              value={this.state.product.name}
            />

            <InputForm
              id="product-ingredients"
              type="text"
              label="Ingredients"
              name="productIngredients"
              placeholder="Ex: Farinha, Abóbora, ..."
              fatherFunction={this.handleChange}
              value={this.state.product.ingredients}
            />
          </div>

          <div className="group-form">
            <InputForm
              id="product-weight"
              type="text"
              label="Peso do produto"
              name="productWeight"
              placeholder="Ex: 200 g"
              fatherFunction={this.handleChange}
              value={this.state.product.weight}
            />

            <InputForm
              id="product-price"
              type="text"
              label="Preço do produto"
              name="productPrice"
              placeholder="R$"
              fatherFunction={this.handleChange}
              value={this.state.product.price}
            />
          </div>
          <div className="group-form">
            <InputForm
              id="product-image"
              type="file"
              name="productImage"
              fatherFunction={this.handleChange}
              value={this.state.product.file}
              isImage
            />
          </div>

          <button onClick={this.handleSave}>Cadastrar</button> */}

          <FormContent />
        </Form>
      </Container>
    );
  }
}

export default MainContent;
