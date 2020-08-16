import styled from 'styled-components';

import { BreadSlice } from '../../styles/GlobalIcons';
import { ThreeBars } from '../../styles/GlobalIcons';

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
  }

  @media (min-width: 700px) {
    > nav {
      padding: 1rem 8rem;
    }
  }
`;

export const Logo = styled(BreadSlice)`
  width: 3rem;
  height: 3rem;
  color: var(--color-primary);
`;

export const RightSide = styled.div`
  > ul {
    display: none;
    list-style: none;
    transform: translateX(10rem);
    transition: 0.2s;

    > li {
      font-family: var(--font-headings);
      font-size: 1.7rem;
      font-weight: 500;
      color: var(--color-primary);

      &:not(:last-child) {
      }
    }
  }

  @media (min-width: 700px) {
    > ul {
      display: flex;
      transform: translateX(0);

      > li {
        > a {
          cursor: pointer;
          color: var(--color-primary);
        }

        &:not(:last-child) {
          padding-right: 3rem;
        }
      }
    }
  }
`;

export const Bars = styled(ThreeBars)`
  width: 3rem;
  height: 3rem;
  color: var(--color-primary);

  @media (min-width: 700px) {
    display: none;
  }
`;
