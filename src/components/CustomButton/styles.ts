import styled from 'styled-components';

import { Google } from '../../styles/GlobalIcons';

export const Container = styled.div`
  > button {
    background-color: var(--color-secondary);
    border-radius: 3px;
    padding: 1.7rem;
    color: var(--color-primary);
    cursor: pointer;
  }
`;

export const GoogleIcon = styled(Google)`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;
