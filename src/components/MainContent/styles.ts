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

  > h2 {
    color: #fff;
    font-weight: bold;
    font-size: 13pt;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AddIcon = styled.div``;
export const Moeda = styled.div``;
