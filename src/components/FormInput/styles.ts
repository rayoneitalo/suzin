import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  > input {
    border: 1px solid var(--color-secondary);
    border-radius: 5px;
    padding: 0.5rem;
  }
`;

export const Label = styled.label``;
