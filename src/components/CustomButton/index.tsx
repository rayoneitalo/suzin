import React from 'react';

import { Container, GoogleIcon } from './styles';

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
      <button {...rest}>
        {isGoogleSignIn && <GoogleIcon />}
        {children}
      </button>
    </Container>
  );
};

export default CustomButton;
