import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    font-size: 11pt;
  }

  > input {
    border: 1px solid var(--color-input);
    border-radius: 0.3rem;
    height: 4rem;
    padding: 0.7rem;
  }
`;
