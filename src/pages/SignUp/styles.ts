import styled from 'styled-components';

import { ChevronRight } from '../../styles/GlobalIcons';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  background-size: cover;
`;

export const SignUpForm = styled.div`
  padding: 2rem 2rem;
  background: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  > form {
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 2.5rem;
    }
  }

  > span {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    > a {
      color: var(--color-primary);
    }
  }

  @media (min-width: 700px) {
    width: 700px;
    margin: 1rem;
    padding: 4rem 4rem 2rem 4rem;
    margin: 0 auto;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  > div > button {
    font-size: 1.6rem;
    width: 20rem;
  }
`;

export const RightArrowIcon = styled(ChevronRight)`
  width: 3rem;
  width: 3rem;
  margin-left: -1rem;
`;
