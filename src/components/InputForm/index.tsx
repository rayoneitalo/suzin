import React from 'react';

import { Container } from './styles';

interface Props {
  id?: string;
  name: string;
  type: string;
  label?: string;
  value?: any;
  required?: any;
  placeholder?: string;
  fatherFunction?: any;
  isImage?: boolean;
}

const InputForm: React.FC<Props> = ({
  id,
  type,
  label,
  name,
  placeholder,
  fatherFunction,
  ...rest
}) => {
  const handleChange = (event: any) => {
    return fatherFunction(event);
  };
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default InputForm;
