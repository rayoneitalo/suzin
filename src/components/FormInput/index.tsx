import React from 'react';

import { Container, Label } from './styles';

interface FormInputProps {
  name: string;
  type: string;
  label: string;
  value: string;
  handleChange: any;
  required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  handleChange,
  ...rest
}) => {
  return (
    <Container>
      <Label htmlFor={name}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Label>
      <input id={name} name={name} onChange={handleChange} {...rest} />
    </Container>
  );
};

export default FormInput;
