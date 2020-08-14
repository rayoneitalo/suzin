import React from 'react';

import { Container } from './styles';

interface CustomButtonProps {
  type?: any;
  onClick?: any;
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...rest
}) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default CustomButton;
