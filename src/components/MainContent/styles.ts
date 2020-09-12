import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MC;
`;

export const Header = styled.div`
  display: flex;
  height: 45px;
  background: var(--color-primary);
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  border-radius: 4px;
  margin-bottom: 3rem;

  > h2 {
    color: #fff;
    font-weight: bold;
    font-size: 2.4rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .group-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    > div:not(:last-child) {
      margin-right: 45px;
    }
  }

  > button {
    cursor: pointer;
    border: 1px solid #333;
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 4px;
  }
`;
export const AddIcon = styled.div``;
export const Moeda = styled.div``;
