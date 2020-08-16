import styled from 'styled-components';

import { Google } from '../../styles/GlobalIcons';

export const Container = styled.div`
  > button {
    background-color: var(--color-secondary);
    border-radius: 3px;
    padding: 1.7rem;

    color: var(--color-primary);
    font-size: 1.5rem;

    cursor: pointer;
  }
`;

export const GoogleIcon = styled(Google)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
