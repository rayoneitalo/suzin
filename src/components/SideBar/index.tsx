import React from 'react';
import { Container, Menu, DropdownContainer } from './styles';

class SideBar extends React.Component {
  state = {
    ProductDropdown: false,
    GalleryDropdown: false,
  };

  displayChange = (e: any) => {
    switch (e.target.innerText) {
      case 'New product':
        this.setState({
          ProductDropdown: !this.state.ProductDropdown,
        });
        break;
      case 'Gallery':
        this.setState({
          GalleryDropdown: !this.state.GalleryDropdown,
        });
        break;
      default:
        break;
    }
  };

  formChange = (e: any) => {
    console.log(e.target.innerText);
  };

  render() {
    return (
      <Container>
        <Menu>
          <button onClick={this.displayChange}>New product</button>
        </Menu>
        {this.state.ProductDropdown && (
          <DropdownContainer>
            <li onClick={this.formChange}>My product</li>
            <li onClick={this.formChange}>Partner product</li>
          </DropdownContainer>
        )}
        <Menu>
          <button onClick={this.displayChange}>Gallery</button>
        </Menu>
        {this.state.GalleryDropdown && (
          <DropdownContainer>
            <li onClick={this.formChange}>Event</li>
            <li onClick={this.formChange}>Pictures</li>
          </DropdownContainer>
        )}
      </Container>
    );
  }
}

export default SideBar;
