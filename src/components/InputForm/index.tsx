import React from 'react';

import { Container } from './styles';

interface Props {
  id?: string;
  name: string;
  type: string;
  label?: string;
  value?: string;
  required?: any;
  fatherFunction?: any;
}

const InputForm: React.FC<Props> = ({
  id,
  type,
  label,
  name,
  fatherFunction,
  ...rest
}) => {
  const handleChange = (event: any) => {
    return fatherFunction(event);
  };
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={name} onChange={handleChange} />
    </Container>
  );
};

export default InputForm;
