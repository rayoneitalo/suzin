import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  height: 100%;

  background-size: cover;
`;

export const SignInForm = styled.div`
  padding: 4rem 2rem;
  background: #fff;
  border-radius: 10px;

  > form {
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 700px) {
    width: 700px;
    margin: 1rem;
    padding: 4rem;
    margin: 0 auto;
  }
`;

export const Buttons = styled.div`
  display: flex;
  transform: translateY(2rem);
  justify-content: space-between;
  width: 100%;
`;
