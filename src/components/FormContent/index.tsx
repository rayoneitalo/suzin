import React from 'react';
import InputForm from '../InputForm';

class FormContent extends React.Component {
  state = {
    toggleOn: false,
  };

  toggleOn = (e: any) => {
    this.setState({
      toggleOn: !this.state.toggleOn,
    });
  };

  render() {
    return (
      <>
        {this.state.toggleOn ? (
          <InputForm id="product-name" type="text" name="productName" />
        ) : null}
        {/* <button onClick={this.toggleOn}>Cadastrar produto</button> */}
      </>
    );
  }
}

export default FormContent;
